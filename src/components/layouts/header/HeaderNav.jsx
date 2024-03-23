import styled from 'styled-components';
import HeaderNavItem from '@components/layouts/header/HeaderNavItem';
import HeaderButton from '@components/ui/Button/HeaderButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';

const HeaderNav = () => {
  const nav = useNavigate();

  return (
    <Wrapper>
      <HeaderGlobal>
        <HeaderNavItem />
        <ButtonContainer>
          <HeaderButton type="sub" title="회원가입" />
          <HeaderButton type="primary" title="로그인" onClick={() => nav(ROUTES.LOGIN)} />
        </ButtonContainer>
      </HeaderGlobal>
    </Wrapper>
  );
};

export default HeaderNav;

const Wrapper = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
