import ReviewBox from '@/pages/UserProfile/ReviewBox';
import styled from 'styled-components';

const UserReview = ({ type }) => {
  const mannersData = [
    {
      id: 0,
      score: 50,
      text: '🙂 약속 시간을 잘 지켜요',
    },
    {
      id: 1,
      score: 75,
      text: '🙂 대화 참여가 활발해요',
    },
    {
      id: 3,
      score: 35,
      text: '🙂 식사 매너가 좋아요',
    },
  ];
  const badMannersData = [
    {
      id: 0,
      score: 20,
      text: '🙁 약속 시간을 잘 지키지 못해요',
    },
    {
      id: 1,
      score: 10,
      text: '🙁 응답이 느려요',
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
