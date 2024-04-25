import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import gatherApi from '@api/biz/gatherApi';
import ApplicantCard from '@/pages/ApplicantList/ApplicantCard';
import ApplicantTitle from '@/pages/ApplicantList/ApplicantTitle';
import ApplicantContent from '@/pages/ApplicantList/ApplicantContent';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import close from '@/assets/images/svg/closeIcon.svg';
import open from '@/assets/images/svg/moreIcon.svg';

const Applicantlist = () => {
  const { postId } = useParams();
  const [information, setInformation] = useState([]);
  const [activeKey, setActiveKey] = useState('0');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const type = parseInt(activeKey, 10);

        const askListResponse = await gatherApi.getAskList({ postId, type, page });
        let newData = [];
        if (askListResponse.data) {
          if (askListResponse.data.result) {
            newData = askListResponse.data.result;
          }
        }
        setInformation((prev) => [...prev, ...newData]);
        setTotalPages(askListResponse.data.pageInfo ? askListResponse.data.pageInfo.totalPages : 0);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [activeKey, postId, page]);

  const onTabChange = (key) => {
    setActiveKey(key);
    setPage(0); // Reset the page when tab changes
    setInformation([]); // Clear previous information
  };

  const handleMoreClick = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    } else {
      // Reset to the initial state if it's the last page
      setPage(0);
      setInformation([]);
    }
  };

  const renderButton = () => {
    if (totalPages <= 1) return null; // Don't show button if only one page or none
    const buttonText = page < totalPages - 1 ? '더보기' : '접기';
    if (buttonText === '더보기') {
      return (
        <StyledButton onClick={handleMoreClick}>
          <>
            <Icon src={open} alt="open" />
            <Paragraphy content="더보기" size="large" color="contentTertiary" />
          </>
        </StyledButton>
      );
    }

    return (
      <StyledButton onClick={handleMoreClick}>
        <>
          <Icon src={close} alt="close" />
          <Paragraphy content="접기" size="large" color="contentTertiary" />
        </>
      </StyledButton>
    );
  };

  const items = [
    {
      label: '전체보기',
      key: '0',
      children: (
        <>
          <ApplicantCard information={information} />
          {renderButton()}
        </>
      ),
    },
    {
      label: '수락대기',
      key: '1',
      children: (
        <>
          <ApplicantCard information={information} />
          {renderButton()}
        </>
      ),
    },
    {
      label: '수락완료',
      key: '2',
      children: (
        <>
          <ApplicantCard information={information} />
          {renderButton()}
        </>
      ),
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
const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 6.77vw;
`;

const Icon = styled.img``;
