import { Tabs } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ActivityTitle from '@/pages/UserActivity/ActivityTitle';
import ActivityTab from '@/pages/UserActivity/ActivityTab';

const MyTabs = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab') || '1'; // URL에서 'tab' 쿼리 파라미터를 가져옴, 기본값은 '1'
  const information = [
    {
      id: 0,
      title: '제목',
      menuCategory: '분식',
      gender: '남녀무관',
      age: '30대',
      place: '동대문 엽기 떡볶이',
      address: '서울특별시 ~~',
      participantTotal: 4,
      participantCount: 2,
      postStatus: 0, // 모집중
      meetAt: '2050-01-01 pm 12:30',
      closeAt: '2050-01-01 pm 12:00',
    },
    {
      id: 1,
      title: '제목',
      menuCategory: '분식',
      gender: '남녀무관',
      age: '30대',
      place: '동대문 엽기 떡볶이',
      address: '서울특별시 ~~',
      participantTotal: 4,
      participantCount: 2,
      postStatus: 2, // 모임 종료
      meetAt: '2050-01-01 pm 12:30',
      closeAt: '2050-01-01 pm 12:00',
    },
    {
      id: 2,
      title: '제목',
      menuCategory: '분식',
      gender: '남녀무관',
      age: '30대',
      place: '동대문 엽기 떡볶이',
      address: '서울특별시 ~~',
      participantTotal: 4,
      participantCount: 2,
      postStatus: 0, // 모집중
      meetAt: '2050-01-01 pm 12:30',
      closeAt: '2050-01-01 pm 12:00',
    },
    {
      id: 3,
      title: '제목',
      menuCategory: '분식',
      gender: '남녀무관',
      age: '30대',
      place: '동대문 엽기 떡볶이',
      address: '서울특별시 ~~',
      participantTotal: 4,
      participantCount: 2,
      postStatus: 1, // 모집 완료
      meetAt: '2050-01-01 pm 12:30',
      closeAt: '2050-01-01 pm 12:00',
    },
  ];
  const items = [
    {
      label: '모집중',
      key: '1',
      children: <ActivityTab information={information} />, // 여기서 YourComponentForTab1은 해당 탭의 내용을 렌더링하는 컴포넌트입니다.
    },
    {
      label: '모집 완료',
      key: '2',
      children: <ActivityTab information={information} />, // YourComponentForTab2 컴포넌트로 대체합니다.
    },
    {
      label: '신청한 내역',
      key: '3',
      children: <ActivityTab information={information} />, // YourComponentForTab2 컴포넌트로 대체합니다.
    },
  ];
  return (
    <PageWrapper>
      <ActivityTitle />
      <CustomTabs defaultActiveKey={tab} items={items} />
    </PageWrapper>
  );
};

export default MyTabs;
const PageWrapper = styled.div`
  padding: 0px 16.71vw;
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

  /* 이 부분은 antd의 탭 디자인에 따라 필요할 수 있습니다. */
  .ant-tabs-ink-bar {
    background-color: #4caf4f;
  }
`;
