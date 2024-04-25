import ReviewBox from '@/pages/UserProfile/ReviewBox';
import styled from 'styled-components';

const UserReview = ({ type, propData }) => {
  const mannersData = [
    {
      id: 0,
      score: propData.goodPunctuality,
      text: '🙂 약속 시간을 잘 지켜요',
    },
    {
      id: 1,
      score: propData.goodSociability,
      text: '🙂 대화 참여가 활발해요',
    },
    {
      id: 2,
      score: propData.goodManner,
      text: '🙂 식사 매너가 좋아요',
    },
    {
      id: 3,
      score: propData.goodReply,
      text: '🙂 응답이 빨라요',
    },
  ];
  const badMannersData = [
    {
      id: 0,
      score: propData.badPunctuality,
      text: '🙁 약속 시간을 잘 지키지 못해요',
    },
    {
      id: 1,
      score: propData.badSociability,
      text: '🙂 대화 참여가 활발하지 않아요',
    },
    {
      id: 2,
      score: propData.badManner,
      text: '🙂 식사 매너가 좋지 않아요',
    },
    {
      id: 3,
      score: propData.badReply,
      text: '🙁 응답이 느려요',
    },
  ];

  return (
    <HistoryWrapper>
      <ReviewBox
        title={
          type === 'mypage' ? '내가 받은 매너 평가' : `${propData.nickname}님이 받은 매너 평가`
        }
        items={mannersData}
      />
      <ReviewBox
        title={
          type === 'mypage' ? '내가 받은 비매너 평가' : `${propData.nickname}님이 받은 비매너 평가`
        }
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
