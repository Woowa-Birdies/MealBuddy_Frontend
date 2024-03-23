import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import styled from 'styled-components';
import SvgComponent from '@components/ui/Logo/SvgComponent';
import MainLogo from '@assets/images/svg/logo.svg?react';

const LoginLogo = () => {
  return (
    <StyledDiv>
      <Link to={ROUTES.HOME}>
        <SvgComponent src={MainLogo} width={309.69} height={69} />
      </Link>
    </StyledDiv>
  );
};

export default LoginLogo;

const StyledDiv = styled.div`
  margin: auto;
`;
