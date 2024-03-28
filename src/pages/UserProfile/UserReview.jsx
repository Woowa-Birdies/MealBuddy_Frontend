import ReviewBox from '@/pages/UserProfile/ReviewBox';
import styled from 'styled-components';

const UserReview = ({ type }) => {
  const mannersData = [
    {
      id: 0,
      score: 77,
      text: '🙂 매너 리뷰1',
    },
    {
      id: 1,
      score: 77,
      text: '🙂 매너 리뷰2',
    },
    {
      id: 3,
      score: 77,
      text: '🙂 매너 리뷰2',
    },
  ];
  const badMannersData = [
    {
      id: 0,
      score: 77,
      text: '🙁 비매너 리뷰1',
    },
    {
      id: 1,
      score: 77,
      text: '🙁 비매너 리뷰2',
    },
  ];

  return (
    <HistoryWrapper>
      <ReviewBox
        title={type === 'mypage' ? '내가 받은 매너 평가' : 'OOO님이 받은 매너 평가'}
        items={mannersData}
      />
      <ReviewBox
        title={type === 'mypage' ? '내가 받은 비매너 평가' : 'OOO님이 받은 비매너 평가'}
        items={badMannersData}
      />
    </HistoryWrapper>
  );
};

export default UserReview;

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 99px;
  margin: 132px 0px;
`;
