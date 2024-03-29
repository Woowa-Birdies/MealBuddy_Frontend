import styled from 'styled-components';
import CompletedButton from '@components/ui/Button/CompletedButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';

const RecruitCompletedButton = () => {
  const nav = useNavigate();
  const handleClick = () => {
    console.log('등록');
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
