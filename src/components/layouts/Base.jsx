import Footer from '@components/layouts/footer';
import Header from '@components/layouts/header';
import { useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Base = ({ children }) => {
  useEffect(() => {
    // 쿠키 확인
    const accessCookie = Cookies.get('__Secure-access');
    const refreshCookie = Cookies.get('__Secure-refresh');

    console.log('accessCookie', accessCookie);
    console.log('refreshCookie', refreshCookie);

    if (accessCookie && refreshCookie) {
      console.log('__Secure-access 쿠키가 있습니다:', accessCookie);
      console.log('__Secure-refresh 쿠키가 있습니다:', refreshCookie);
    } else {
      console.log('필요한 쿠키가 존재하지 않습니다.');
    }
  }, []);

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
