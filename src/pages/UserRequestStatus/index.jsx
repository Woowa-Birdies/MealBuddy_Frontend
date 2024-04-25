import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import askApi from '@api/biz/askApi';
import styled from 'styled-components';
import RequestTitle from '@/pages/UserRequestStatus/RequestTitle';
import RequestContent from '@/pages/UserRequestStatus/RequestContent';
import useUserInfoStore from '@store/useUserInfoStore';
import Paragraphy from '@components/ui/Paragraphy/Paragraphy';
import close from '@/assets/images/svg/closeIcon.svg';
import open from '@/assets/images/svg/moreIcon.svg';

const MyTabs = () => {
  const [information, setInformation] = useState([]);
  const { userId } = useUserInfoStore();
  const [activeKey, setActiveKey] = useState('0');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const type = parseInt(activeKey, 10);
        const response = await askApi.getmyAskList({ userId, type, page });

        let newData = [];
        if (response.data) {
          if (type === 0 && response.data.waitingOrRejected) {
            newData = response.data.waitingOrRejected;
          } else if (type === 1 && response.data.accepted) {
            newData = response.data.accepted;
          } else if (type === 2 && response.data.participated) {
            newData = response.data.participated;
          }
        }

        setInformation((prev) => [...prev, ...newData]); // Safely spread newData even if it's empty
        setTotalPages(response.data.pageInfo ? response.data.pageInfo.totalPages : 0);
      } catch (error) {
        console.error('Failed to load data', error);
      }
    };

    loadData();
  }, [activeKey, userId, page]);

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
      label: '대기중',
      key: '0',
      children: (
        <>
          <RequestContent information={information} />
          {renderButton()}
        </>
      ),
    },
    {
      label: '승인된 요청',
      key: '1',
      children: (
        <>
          <RequestContent information={information} />
          {renderButton()}
        </>
      ),
    },
    {
      label: '참여 완료',
      key: '2',
      children: (
        <>
          <RequestContent information={information} />
          {renderButton()}
        </>
      ),
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
