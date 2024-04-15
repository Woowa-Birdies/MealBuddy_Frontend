import styled from 'styled-components';
import Typography from '@components/ui/Typography/Typography';
import usePostStore from '@store/usePostStore';
import SampleImg from '@/assets/images/png/profileimg.png';

const UserContainer = () => {
  const { post } = usePostStore();

  return (
    <Container>
      <ProfileImg src={SampleImg} />
      <ProfileContainer>
        <Typography content={post.nickname} size="xl" />
        {post.userId}
      </ProfileContainer>
    </Container>
  );
};

export default UserContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 28.56px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 22px;
`;
