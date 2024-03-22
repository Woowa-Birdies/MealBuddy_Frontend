import useLoginStore from '@/store/useLoginStore';
import { Link } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import LogoImage from '@assets/images/svg/logo.svg?react';
import HeaderNav from '@components/layouts/header/HeaderNav';
import styled from 'styled-components';

const Header = () => {
  // zustand store의 isLogin 값 가지고옴
  const isLogin = useLoginStore((state) => state.isLogin);

  return (
    <Wrapper $isLogin={isLogin}>
      <HeaderInner>
        <h1>
          <Link to={ROUTES.HOME}>
            <LogoImage />
          </Link>
        </h1>
        <HeaderNav />
      </HeaderInner>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  height: 88px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: block;
  border: ${({ theme, $isLogin }) => ($isLogin ? 'none' : theme.border.borderTransparent)};
  background-color: ${({ theme, $isLogin }) =>
    $isLogin ? theme.color.whiteSmoke : theme.color.contentWhite};
  //transform: translateY(-100%);

  h1 {
    z-index: 1;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    flex: none;
    height: 88px;

    a {
      display: block;
      height: 38px;
    }

    svg {
      vertical-align: top;
      height: 100%;
    }
  }
`;

const HeaderInner = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 50px;
`;
