import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import ReviewUser from '@/pages/Review/ReviewUser';

const Participants = () => {
  return (
    <Container>
      <Typography content="참여한 냠냠메이트" size="large" />
      <UserList>
        <ReviewUser />
        <ReviewUser />
        <ReviewUser />
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
