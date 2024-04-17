import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import gatherApi from '@api/biz/gatherApi';
import ApplicantCard from '@/pages/ApplicantList/ApplicantCard';
import ApplicantTitle from '@/pages/ApplicantList/ApplicantTitle';
import ApplicantContent from '@/pages/ApplicantList/ApplicantContent';

const Applicantlist = () => {
  const { postId } = useParams();
  const [information, setInformation] = useState([]);
  const [activeKey, setActiveKey] = useState('0');

  useEffect(() => {
    const loadData = async () => {
      try {
        const type = parseInt(activeKey, 10);

        const askListResponse = await gatherApi.getAskList({ postId, type });
        setInformation(askListResponse.data.result);
        // console.log('response', data, 'tab', activeKey);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [activeKey, postId]);

  const onTabChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      label: '전체보기',
      key: '0',
      children: <ApplicantCard information={information} />,
    },
    {
      label: '수락대기',
      key: '1',
      children: <ApplicantCard information={information} />,
    },
    {
      label: '수락완료',
      key: '2',
      children: <ApplicantCard information={information} />,
    },
  ];
  return (
    <PageWrapper>
      <ApplicantTitle />
      <ApplicantContent />
      <CustomTabs defaultActiveKey="0" items={items} onTabClick={onTabChange} />
    </PageWrapper>
  );
};
export default Applicantlist;
const PageWrapper = styled.div`
  padding: 0px 16.67vw;
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
