import styled from 'styled-components';
import UserContainer from '@/pages/RecruitPost/UserContainer';
import Post from '@/pages/RecruitPost/Post';
import ButtonContainer from '@/pages/RecruitPost/ButtonContainer';

const RecruitPost = () => {
  return (
    <RecruitPostPage>
      <UserContainer />
      <Post />
      <ButtonContainer />
    </RecruitPostPage>
  );
};

export default RecruitPost;

const RecruitPostPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding: 30px;
  gap: 100px;
`;
