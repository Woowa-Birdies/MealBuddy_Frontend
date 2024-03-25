import styled from 'styled-components';
import HeaderNavItem from '@components/layouts/header/HeaderNavItem';

import HeaderButtonContainer from '@components/layouts/header/HeaderButtonContainer';

const HeaderNav = () => {
  return (
    <StyledDiv>
      <HeaderGlobal>
        <HeaderNavItem />
        <HeaderButtonContainer />
      </HeaderGlobal>
    </StyledDiv>
  );
};

export default HeaderNav;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  -webkit-box-pack: end;
  -webkit-box-align: start;
  -webkit-box-flex: 1;
`;

const HeaderGlobal = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex: 1;
  align-items: center;
  gap: 20px;
  padding-left: 442px;

  strong {
    font-weight: 400;
  }
`;
