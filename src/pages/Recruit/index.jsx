import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RecruitTitle from '@/pages/Recruit/RecruitTitle';
import RecruitForm from '@/pages/Recruit/RecruitForm';
import RecruitCompletedButton from '@/pages/Recruit/RecruitCompletedButton';

const Recruit = () => {
  const { postId } = useParams();

  return (
    <RecruitPage>
      <RecruitTitle />
      <RecruitForm postId={postId} />
      <RecruitCompletedButton postId={postId} />
    </RecruitPage>
  );
};

export default Recruit;

const RecruitPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 150px;
  padding: 30px;
  gap: 100px;
`;
