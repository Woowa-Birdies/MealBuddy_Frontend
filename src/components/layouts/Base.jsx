import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useCookie from '@hooks/useCookie';
import { SYSTEM_MODE } from '@constants/Constants';
import useLoginStore from '@store/useLoginStore';
import { TOKEN_DEV } from '@/token';

const Base = ({ children }) => {
  const nav = useNavigate();

  // 쿠키에 access token 값
  const accessCookie = useCookie('__Secure-access');
  const { setIsLogin } = useLoginStore();

  useEffect(() => {
    console.log('SYSTEM_MODE', SYSTEM_MODE);
    if (SYSTEM_MODE === 'production') {
      if (!accessCookie) {
        // nav(ROUTES.LOGIN); //로그인창으로 튕겨낼지말지?
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    } else {
      if (!TOKEN_DEV) {
        console.log('로그인 후 token.js에 token을 넣어주세요');
        // nav(ROUTES.LOGIN); //로그인창으로 튕겨낼지말지?
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    }
  }, [accessCookie, nav, setIsLogin]);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Base;

const StyledMain = styled.main`
  margin-top: 0;
  padding-top: 66px;
  width: 100%;
  height: auto;
`;
