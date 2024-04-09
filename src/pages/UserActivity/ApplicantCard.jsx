import styled from 'styled-components';
import AcceptButton from '@components/ui/Button/AcceptButton';
import SampleImg from '@/assets/images/png/profileimg.png';
import Typography from '@components/ui/Typography/Typography';
import TagButton from '@components/ui/Button/TagButton';

const ApplicantCard = () => {
  return (
    <Container>
      <ApplicantContainer>
        <ProfileContainer>
          <ProfileImg src={SampleImg} />
          <User>
            <Typography content="USER001" size="large" />
            <TagContainer>
              <TagButton title="20대" />
              <TagButton title="도봉구" />
            </TagContainer>
          </User>
        </ProfileContainer>
        <Intro>안녕하세요.</Intro>
      </ApplicantContainer>
      <ButtonContainer>
        <AcceptButton title="거절하기" color="contentPrimary" />
        <AcceptButton title="수락하기" />
      </ButtonContainer>
    </Container>
  );
};

export default ApplicantCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 30vh;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgba(137, 137, 137, 0.3);
  background: #fff;
  gap: 1vh;
  padding: 1vw 1vh;
`;

const ApplicantContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  padding: 0 7%;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 6.17vw;
  height: 6.17vw;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 28.56px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Intro = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0 5%;
`;