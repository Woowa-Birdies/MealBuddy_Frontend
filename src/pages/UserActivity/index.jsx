import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import gatherApi from '@api/biz/gatherApi';
import styled from 'styled-components';
import ActivityTitle from '@/pages/UserActivity/ActivityTitle';
import ActivityContent from '@/pages/UserActivity/ActivityContent';
import useUserInfoStore from '@store/useUserInfoStore';

const MyTabs = () => {
  const [information, setInformation] = useState([]);
  const { userProfile } = useUserInfoStore();
  const [activeKey, setActiveKey] = useState('0');
  const now = userProfile.userId;
  console.log('now', now);

  useEffect(() => {
    const loadData = async () => {
      try {
        const type = parseInt(activeKey, 10);
        const response = await gatherApi.getUserPostList({ userId: now, type });

        let data = [];
        if (type === 0) {
          data = response.data.ongoing || [];
        } else if (type === 1) {
          data = response.data.completion || [];
        } else {
          data = response.data.closed || [];
        }
        setInformation(data);
        console.log('response', data, 'tab', activeKey);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [activeKey, now]);

  const onTabChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      label: '모집중',
      key: '0',
      children: <ActivityContent information={information} />,
    },
    {
      label: '모집 완료',
      key: '1',
      children: <ActivityContent information={information} />,
    },
    {
      label: '종료된 모임',
      key: '2',
      children: <ActivityContent information={information} />,
    },
  ];
  return (
    <PageWrapper>
      <ActivityTitle />
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
