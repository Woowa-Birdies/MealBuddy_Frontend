import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ROUTES } from '@enums/CommonEnum';
import { useNavigate } from 'react-router-dom';
import useCookie from '@hooks/useCookie';
import { SYSTEM_MODE } from '@constants/Constants';
import useLoginStore from '@store/useLoginStore';
import { TOKEN_DEV } from '@/token';

const Base = ({ children }) => {
  const nav = useNavigate();
  const accessCookie = useCookie('__Secure-access');
  const { setIsLogin } = useLoginStore();

  useEffect(() => {
    if (SYSTEM_MODE === 'production' && !accessCookie) {
      nav(ROUTES.LOGIN);
    } else {
      if (SYSTEM_MODE !== 'production' && !TOKEN_DEV) {
        console.log('asdf');
        nav(ROUTES.LOGIN);
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
