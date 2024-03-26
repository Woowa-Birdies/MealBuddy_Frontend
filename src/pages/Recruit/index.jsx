import styled from 'styled-components';
import RecruitTitle from '@/pages/Recruit/RecruitTitle';
import RecruitForm from '@/pages/Recruit/RecruitForm';
import RecruitCompletedButton from '@/pages/Recruit/RecruitCompletedButton';

const Recruit = () => {
  return (
    <RecruitPage>
      <RecruitTitle />
      <RecruitForm />
      <RecruitCompletedButton />
    </RecruitPage>
  );
};

export default Recruit;

const RecruitPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding: 30px;
  gap: 100px;
`;