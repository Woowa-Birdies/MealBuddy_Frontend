import { Button, Result } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@enums/CommonEnum';
import styled from 'styled-components';
import { SYSTEM_MODE } from '@constants/Constants';
import Cookies from 'js-cookie';
import { TOKEN_DEV } from '@/token';

const Logout = () => {
  const nav = useNavigate();
  const accessCookie = Cookies.get('__Secure-access');

  // 시간조절 5초 = 5
  const [counter, setCounter] = useState(5);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setCounter((c) => {
        if (c > 0) return c - 1;
        window.clearInterval(timerId.current);
        window.location.href = ROUTES.LOGIN;
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
    <LogoutWrap>
      <LogoutInner>
        <LogoutForm>
          <Result
            status="success"
            title="정상적으로 로그아웃되었습니다"
            subTitle={<>{counter}초 후에 로그인 화면으로 이동합니다</>}
            extra={[
              <Button
                type="link"
                key="goLogin"
                // eslint-disable-next-line
                onClick={() => (window.location.href = ROUTES.LOGIN)}
              >
                로그인 화면으로 가기
              </Button>,
            ]}
          />
        </LogoutForm>
      </LogoutInner>
    </LogoutWrap>
  );
};
export default Logout;

const LogoutWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LogoutInner = styled.div`
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
