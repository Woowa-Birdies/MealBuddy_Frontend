import { Button, Result } from 'antd';
import { useEffect, useRef, useState } from 'react';
import bgimg from '@assets/images/jpg/login-background.jpg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import styled from 'styled-components';
import { TOKEN_DEV } from '@/token';
import { SYSTEM_MODE } from '@constants/Constants';
import useCookie from '@hooks/useCookie';

const Logout = () => {
  const nav = useNavigate();
  const accessCookie = useCookie('__Secure-access');

  // 시간조절 5초 = 5
  const [counter, setCounter] = useState(5);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setCounter((c) => {
        if (c > 0) return c - 1;
        window.clearInterval(timerId.current);
        nav(ROUTES.LOGIN);
        return 0;
      });
    }, 1000);

    return () => {
      if (timerId.current !== null) {
        window.clearInterval(timerId.current);
      }
    };
  }, [nav]);

  useEffect(() => {
    if (SYSTEM_MODE === 'prod') {
      if (accessCookie) {
        nav(ROUTES.HOME);
      }
    } else if (TOKEN_DEV) {
      nav(ROUTES.HOME);
    }
  }, [accessCookie, nav]);

  return (
    <LoginWrap img={bgimg}>
      <LoginInner>
        <LogoutForm>
          <Result
            status="success"
            title="정상적으로 로그아웃되었습니다"
            subTitle={<>{counter}초 후에 로그인 화면으로 이동합니다</>}
            extra={[
              <Button type="link" key="goLogin" onClick={() => nav('/login')}>
                로그인 화면으로 가기
              </Button>,
            ]}
          />
        </LogoutForm>
      </LoginInner>
    </LoginWrap>
  );
};
export default Logout;

const LoginWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

const LoginInner = styled.div`
  margin: auto;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
`;
const LogoutForm = styled.div`
  width: 57rem;
  margin: auto;
  border: 1px solid var(--c-gray2);
  border-radius: 6px;
  padding: 6rem 8rem;
  background: var(--c-white);
`;
