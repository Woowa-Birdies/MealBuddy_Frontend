import styled from 'styled-components';
import CompletedButton from '@components/ui/Button/CompletedButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import useRecruitStore from '@store/useRecruitStore';

const RecruitCompletedButton = () => {
  const nav = useNavigate();
  const { recruitPost } = useRecruitStore();

  const handleClick = () => {
    console.log(recruitPost);
    nav(ROUTES.RECRUITPOST);
  };

  return (
    <ButtonContainer>
      <CompletedButton title="작성 완료" onClick={handleClick} />
    </ButtonContainer>
  );
};

export default RecruitCompletedButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
