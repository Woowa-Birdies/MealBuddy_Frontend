import styled from 'styled-components';
import SelectButton from '@components/ui/Button/SelectButton';
import CompletedButton from '@components/ui/Button/CompletedButton';
import Typography from '@components/ui/Typography/Typography';
import useReviewStore from '@/store/useReviewStore';
import ReviewUser from '@/pages/Review/ReviewUser';

const ReviewForm = () => {
  const setShowReviewForm = useReviewStore((state) => state.setShowReviewForm);

  const handleReviewButtonClick = () => {
    setShowReviewForm(false);
  };

  const mannersData = [
    {
      id: 0,
      text: '🙂 매너있어요1',
    },
    {
      id: 1,
      text: '🙂 매너있어요2',
    },
    {
      id: 2,
      text: '🙂 매너있어요3',
    },
  ];
  const badMannersData = [
    {
      id: 0,
      text: '🙁 매너없어요1',
    },
    {
      id: 1,
      text: '🙁 매너없어요2',
    },
  ];

  return (
    <Container>
      <ReviewUser />
      <SelectButton type="ghost" title="참여하지 않은 메이트라면 이곳을 클릭해주세요" />
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
  gap: 202px;
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
