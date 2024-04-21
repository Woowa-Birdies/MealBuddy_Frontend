import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import ReviewUser from '@/pages/Review/ReviewUser';
import useReviewStore from '@store/useReviewStore';

const Participants = () => {
  const { participants } = useReviewStore();
  console.log(participants);

  return (
    <Container>
      <Typography content="참여한 냠냠메이트" size="large" />
      <UserList>
        <ReviewUser type="participants" />
        <ReviewUser type="participants" />
        <ReviewUser type="participants" />
      </UserList>
    </Container>
  );
};

export default Participants;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const UserList = styled.div``;
