import React, { useState } from 'react';
import styled from 'styled-components';
import SelectButton from '@components/ui/Button/SelectButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import Typography from '@components/ui/Typography/Typography';
import useReviewStore from '@/store/useReviewStore';
import ReviewUser from '@/pages/Review/ReviewUser';

const ReviewForm = () => {
  const setShowReviewForm = useReviewStore((state) => state.setShowReviewForm);
  const [isGhost, setIsGhost] = useState(false);

  const handleIsGhostClick = () => {
    setIsGhost(!isGhost);
  };

  const handleReviewButtonClick = () => {
    setShowReviewForm(false);
  };

  const mannersData = [
    {
      id: 0,
      text: '🙂 약속 시간을 잘 지켜요',
    },
    {
      id: 1,
      text: '🙂 대화 참여가 활발해요',
    },
    {
      id: 2,
      text: '🙂 식사 매너가 좋아요',
    },
    {
      id: 3,
      text: '🙂 응답이 빨라요',
    },
  ];
  const badMannersData = [
    {
      id: 0,
      text: '🙁 약속 시간을 잘 지키지 못해요',
    },
    {
      id: 1,
      text: '🙁 대화 참여가 활발하지 않아요',
    },
    {
      id: 1,
      text: '🙁 식사 매너가 아쉬워요',
    },
    {
      id: 1,
      text: '🙁 응답이 느려요',
    },
  ];

  return (
    <Container>
      <ReviewUser />
      <SelectButton
        type="ghost"
        title="참여하지 않은 메이트라면 이곳을 클릭해주세요"
        onClick={handleIsGhostClick}
      />
      {isGhost === false && (
        <ReviewListContainer>
          <MannerContainer>
            <Typography content="매너" size="large" />
            {mannersData.map((item) => (
              <ListItem key={item.id}>
                <SelectButton type="manner" title={item.text} />
              </ListItem>
            ))}
          </MannerContainer>
          <MannerContainer>
            <Typography content="비매너" size="large" />
            {badMannersData.map((item) => (
              <ListItem key={item.id}>
                <SelectButton type="manner" title={item.text} />
              </ListItem>
            ))}
          </MannerContainer>
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
  display: flex;
  gap: 101px;
`;

const MannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5.91px;
`;
