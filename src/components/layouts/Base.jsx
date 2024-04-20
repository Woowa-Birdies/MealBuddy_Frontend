import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ROUTES } from '@enums/CommonEnum';
import { useNavigate } from 'react-router-dom';
import useCookie from '@hooks/useCookie';

const Base = ({ children }) => {
  const nav = useNavigate();
  const accessCookie = useCookie('__Secure-access');

  useEffect(() => {
    if (!accessCookie) {
      nav(ROUTES.LOGIN);
    }
  }, [accessCookie, nav]);

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
