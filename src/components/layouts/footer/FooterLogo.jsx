import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import MainLogo from '@assets/images/svg/logo.svg?react';
import styled from 'styled-components';
import SvgComponent from '@components/ui/Logo/SvgComponent';

const FooterLogo = () => {
  return (
    <StyledDiv>
      <Link to={ROUTES.HOME}>
        <SvgComponent src={MainLogo} width={114.45} height={25.5} />
      </Link>
    </StyledDiv>
  );
};

export default FooterLogo;

const StyledDiv = styled.div``;
