import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCookie from '@hooks/useCookie';
import { SYSTEM_MODE } from '@constants/Constants';
import { getTokenDev } from '@/token';
import useLoginStore from '@store/useLoginStore';
import { ENVMODE } from '@enums/CommonEnum';

const useAuthentication = () => {
  const nav = useNavigate();
  const accessCookie = useCookie('__Secure-access');
  const tokenDev = getTokenDev();
  const { setIsLogin } = useLoginStore();

  useEffect(() => {
    if (SYSTEM_MODE === ENVMODE.PROD) {
      if (!accessCookie) {
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    } else {
      if (!tokenDev) {
        console.log('로그인 후 token.js에 token을 넣어주세요');
        setIsLogin(false);
        return;
      }
      setIsLogin(true);
    }
  }, [accessCookie, nav, setIsLogin, tokenDev]);
};

export default useAuthentication;
