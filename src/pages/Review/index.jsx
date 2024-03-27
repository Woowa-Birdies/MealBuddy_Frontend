import styled from 'styled-components';
import ReviewTitle from '@/pages/Review/ReviewTitle';
import History from '@/pages/Review/History';
import ReviewForm from '@/pages/Review/ReviewForm';
import Participants from '@/pages/Review/Participants';
import useReviewStore from '@/store/useReviewStore';

const Review = () => {
  const showReviewForm = useReviewStore((state) => state.showReviewForm); // Zustand store를 사용하여 상태 읽기

  return (
    <ReviewPage>
      <ReviewTitle />
      <History />
      <Separator />
      {showReviewForm ? <ReviewForm /> : <Participants />}
    </ReviewPage>
  );
};

export default Review;

const ReviewPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 320px;
  gap: 100px;
`;

const Separator = styled.div`
  // width: 100%;
  height: 1px;
  background-color: #ccc;
`;
