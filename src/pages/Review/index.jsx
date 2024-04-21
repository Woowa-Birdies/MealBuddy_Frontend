import { useEffect } from 'react';
import styled from 'styled-components';
import ReviewTitle from '@/pages/Review/ReviewTitle';
import History from '@/pages/Review/History';
import ReviewForm from '@/pages/Review/ReviewForm';
import Participants from '@/pages/Review/Participants';
import useReviewStore from '@/store/useReviewStore';
import { useParams } from 'react-router-dom';
import reviewApi from '@api/biz/reviewApi';

const Review = () => {
  const { setParticipants, showReviewForm } = useReviewStore(); // 상태 및 세터 가져오기
  const { postId } = useParams();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await reviewApi.participantsInfo(postId);
        setParticipants(res.data);
      } catch (error) {
        console.error('Failed to fetch participants:', error);
      }
    };

    fetchParticipants();
  }, [postId, setParticipants]);

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
  height: 1px;
  background-color: #ccc;
`;
