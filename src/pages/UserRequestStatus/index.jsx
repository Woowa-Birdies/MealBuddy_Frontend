import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import askApi from '@api/biz/askApi';
import styled from 'styled-components';
import RequestTitle from '@/pages/UserRequestStatus/RequestTitle';
import RequestContent from '@/pages/UserRequestStatus/RequestContent';

const MyTabs = () => {
  const [information, setInformation] = useState([]);
  const [activeKey, setActiveKey] = useState('0');

  useEffect(() => {
    const loadData = async () => {
      try {
        const type = parseInt(activeKey, 10);
        const response = await askApi.getmyAskList({ userId: 1, type });

        let data = [];
        if (type === 0) {
          data = response.data.waitingOrRejected || [];
        } else if (type === 1) {
          data = response.data.accepted || [];
        } else {
          data = response.data.participated || [];
        }
        setInformation(data);
        // console.log('response', data, 'tab', activeKey);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [activeKey]);

  const onTabChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      label: '대기중',
      key: '0',
      children: <RequestContent information={information} />,
    },
    {
      label: '승인된 요청',
      key: '1',
      children: <RequestContent information={information} />,
    },
    {
      label: '참여 완료',
      key: '2',
      children: <RequestContent information={information} />,
    },
  ];
  return (
    <PageWrapper>
      <RequestTitle />
      <CustomTabs defaultActiveKey="0" items={items} onTabClick={onTabChange} />
    </PageWrapper>
  );
};

export default MyTabs;
const PageWrapper = styled.div`
  padding: 0px 16.71vw;
  margin-bottom: 12.24vw;
`;

const CustomTabs = styled(Tabs)`
  .ant-tabs-nav {
    width: 100%;
    margin: 5vw auto;

    &::before {
      display: none;
    }
  }

  .ant-tabs-nav-wrap {
    justify-content: center;
  }

  .ant-tabs-nav-list {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .ant-tabs-tab {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #000;
    padding: 1.65vw 0px;
    font-size: 1.2vw;
    &:hover {
      color: #4caf4f;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #4caf4f;
  }

  .ant-tabs-ink-bar {
    background-color: #4caf4f;
  }
`;
