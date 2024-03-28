import styled from 'styled-components';
import EditButton from '@components/ui/Button/EditButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';

const ButtonContainer = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav(ROUTES.RECRUIT);
  };
  return (
    <Container>
      <EditButton title="수정" onClick={handleClick} />
    </Container>
  );
};

export default ButtonContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
