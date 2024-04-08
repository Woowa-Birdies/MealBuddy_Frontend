import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import styled from 'styled-components';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import MainLogo from '@assets/images/svg/logo.svg?react';

const LoginLogo = () => {
  return (
    <StyledDiv>
      <Link to={ROUTES.HOME}>
        <SvgComponent src={MainLogo} width={225.5} height={51.75} />
      </Link>
    </StyledDiv>
  );
};

export default LoginLogo;

const StyledDiv = styled.div`
  margin: auto;
`;
