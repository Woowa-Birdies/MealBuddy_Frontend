import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import SampleImg from '@/assets/images/png/profileimg.png';
import ReviewStatusButton from '@components/ui/Button/ReviewStatusButton';
import useReviewStore from '@/store/useReviewStore';

const ReviewUser = () => {
  const setShowReviewForm = useReviewStore((state) => state.setShowReviewForm);

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
  };

  return (
    <Container>
      <ReviewUserContainer>
        <UserContainer>
          <ProfileContainer>
            <ProfileImg src={SampleImg} />
            <Typography content="USER 1" />
          </ProfileContainer>
          <Typography content="HOST" />
        </UserContainer>
        <ReviewStatusButton title="리뷰작성" onClick={handleReviewButtonClick} />
      </ReviewUserContainer>
      <Separator />
    </Container>
  );
};

export default ReviewUser;

const Container = styled.div`
  height: 180px;
`;

const ReviewUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 85px;
  margin: 0 100px 0 0;
`;

const UserContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  gap: 22px;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 28.56px;
`;

const Separator = styled.div`
  height: 1px;
  background: rgba(137, 137, 137, 0.3);
`;
