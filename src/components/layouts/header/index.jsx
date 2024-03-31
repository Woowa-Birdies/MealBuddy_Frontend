import useLoginStore from '@/store/useLoginStore';
import styled from 'styled-components';
import useHideHeader from '@hooks/useHideHeader';
import HeaderLogo from '@components/layouts/header/HeaderLogo';
import HeaderNav from '@components/layouts/header/HeaderNav';

const Header = () => {
  // zustand store의 isLogin 값 가지고옴
  const { isLogin } = useLoginStore();
  const hidden = useHideHeader();

  return (
    <StyledHeader $isLogin={isLogin} $hidden={hidden}>
      <HeaderInner>
        <HeaderLogo />
        <HeaderNav />
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 66px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: block;
  border: ${({ theme, $isLogin }) => ($isLogin ? 'none' : theme.border.borderTransparent)};
  background-color: ${({ theme, $isLogin }) =>
    $isLogin ? theme.color.whiteSmoke : theme.color.contentWhite};
  // 기존 스타일링 코드와 함께
  transform: ${({ $hidden }) => ($hidden ? 'translateY(-100%)' : 'translateY(0)')};
  transition: transform 0.3s ease;

  h1 {
    z-index: 1;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    flex: none;
    height: 66px;

    a {
      display: block;
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
  padding: 0 240.75px;
`;
