import { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import SelectButton from '@components/ui/Button/SelectButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import Typography from '@components/ui/Typography/Typography';
import useReviewStore from '@/store/useReviewStore';
import ReviewUser from '@/pages/Review/ReviewUser';
import reviewApi from '@api/biz/reviewApi';

const ReviewForm = () => {
  const setShowReviewForm = useReviewStore((state) => state.setShowReviewForm);
  const { selectedParticipant, reviewData, setReviewData } = useReviewStore();

  // 여기 체크해봐야 함
  useEffect(() => {
    setReviewData({
      postId: 0,
      userId: 0,
      participation: true,
      punctuality: null,
      sociability: null,
      manner: null,
      reply: null,
    });
    // eslint-disable-next-line
  }, []);

  const idToReviewDataKey = {
    0: 'punctuality',
    1: 'sociability',
    3: 'manner',
    4: 'reply',
  };

  const toggleSelection = (key, value) => {
    const reviewKey = idToReviewDataKey[key];
    setReviewData((currentData) => ({
      ...currentData,
      [reviewKey]: currentData[reviewKey] === value ? null : value,
    }));
  };

  const handleIsGhostClick = () => {
    setReviewData((prev) => ({
      ...prev,
      participation: !prev.participation,
    }));
  };

  const handleReviewButtonClick = async () => {
    try {
      const res = await reviewApi.reviewSave(reviewData);
      console.log(res);
    } catch (error) {
      console.error('Failed to save review:', error);
    }
    setShowReviewForm(false);
  };

  return (
    <Container>
      <ReviewUser participant={selectedParticipant} />
      <SelectButton
        type="ghost"
        title="참여하지 않은 메이트라면 이곳을 클릭해주세요"
        onClick={handleIsGhostClick}
        selected={!reviewData.participation}
      />
      {reviewData.participation && (
        <ReviewListContainer>
          <MannerContainer>
            <MannerTitle>
              <Typography content="매너" size="large" />
            </MannerTitle>
            <MannerContainer>
              <Typography content="비매너" size="large" />
            </MannerContainer>
          </MannerContainer>
          {[
            {
              positive: '😄 약속 시간을 잘 지켜요',
              negative: '😠 약속 시간을 잘 지키지 못해요',
              key: 0,
            },
            {
              positive: '😄 대화 참여가 활발해요',
              negative: '😠 대화 참여가 활발하지 않아요',
              key: 1,
            },
            { positive: '😄 식사 매너가 좋아요', negative: '😠 식사 매너가 아쉬워요', key: 3 },
            { positive: '😄 응답이 빨라요', negative: '😠 응답이 느려요', key: 4 },
          ].map((manner) => (
            <MannerContainer key={manner.key}>
              <StyledButton
                onClick={() => toggleSelection(manner.key, true)}
                selected={reviewData[idToReviewDataKey[manner.key]] === true}
              >
                {manner.positive}
              </StyledButton>
              <StyledButton
                onClick={() => toggleSelection(manner.key, false)}
                selected={reviewData[idToReviewDataKey[manner.key]] === false}
              >
                {manner.negative}
              </StyledButton>
            </MannerContainer>
          ))}
        </ReviewListContainer>
      )}
      <CompletedButton title="작성 완료" onClick={handleReviewButtonClick} />
    </Container>
  );
};

export default ReviewForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const ReviewListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const MannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10vw;
`;

const MannerTitle = styled.div`
  width: 20vw;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 20vw;
  height: 80px;
  background-color: ${({ selected }) => (selected ? '#FFA29C' : '#fff')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-size: 18px;
`;
