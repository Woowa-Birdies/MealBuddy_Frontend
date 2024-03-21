import styled from 'styled-components';
import HeaderNavItem from '@components/layouts/header/HeaderNavItem';

const HeaderNav = () => {
  return (
    <Wrapper>
      <HeaderGlobal>
        <HeaderGlobalNav>
          <HeaderNavItem />
        </HeaderGlobalNav>
      </HeaderGlobal>
    </Wrapper>
  );
};

export default HeaderNav;

const Wrapper = styled.div`
  justify-content: flex-end;
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

  strong {
    font-weight: 400;
  }
`;

const HeaderGlobalNav = styled.ul`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  height: 88px;
`;
