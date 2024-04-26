import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import SampleImg from '@/assets/images/svg/DefaultProfile.svg';
import ReviewStatusButton from '@components/ui/Button/ReviewStatusButton';
import useReviewStore from '@/store/useReviewStore';

const ReviewUser = ({ type, participant }) => {
  const setShowReviewForm = useReviewStore((state) => state.setShowReviewForm);
  const { setSelectedParticipant } = useReviewStore();

  const handleReviewButtonClick = () => {
    setShowReviewForm(true);
    setSelectedParticipant(participant);
  };

  return (
    <Container>
      <ReviewUserContainer>
        <UserContainer>
          <ProfileContainer>
            <ProfileImg src={SampleImg} />
            <Typography content={participant.nickname} />
          </ProfileContainer>
          <Typography content={participant.position} />
        </UserContainer>
        {type === 'participants' && (
          <ReviewStatusButton title="리뷰 작성" onClick={handleReviewButtonClick} />
        )}
      </ReviewUserContainer>
      <Separator />
    </Container>
  );
};

export default ReviewUser;

const Container = styled.div`
  width: 100%;
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
  width: 100%;
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
  filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
`;

const Separator = styled.div`
  height: 1px;
  background: rgba(137, 137, 137, 0.3);
`;
