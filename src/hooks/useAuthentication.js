import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCookie from '@hooks/useCookie';
import { SYSTEM_MODE } from '@constants/Constants';
import { getTokenDev } from '@/token';
import useLoginStore from '@store/useLoginStore';
import { ENVMODE } from '@enums/CommonEnum';
import handleError from '@utils/ErrorHandler';
import useUserInfoStore from '@store/useUserInfoStore';
import userInfoApi from '@api/biz/userInfoApi';

const useAuthentication = () => {
  const nav = useNavigate();
  const accessCookie = useCookie('__Secure-access');
  const tokenDev = getTokenDev();
  const { setIsLogin } = useLoginStore();
  const { setUserId, setUserProfile } = useUserInfoStore();

  const getUserInfo = useCallback(async () => {
    try {
      const resMe = await userInfoApi.getMe();
      setUserId(resMe.data.userId);

      const resProfile = await userInfoApi.getProfile(resMe.data.userId);
      setUserProfile(resProfile.data);
    } catch (error) {
      handleError(error);
    }
  }, [setUserId, setUserProfile]);

  useEffect(() => {
    if (SYSTEM_MODE === ENVMODE.PROD) {
      if (!accessCookie) {
        setIsLogin(false);
        return;
      }
      getUserInfo();
      setIsLogin(true);
    } else {
      if (!tokenDev) {
        console.log('로그인 후 token.js에 token을 넣어주세요');
        setIsLogin(false);
        return;
      }
      getUserInfo();
      setIsLogin(true);
    }
  }, [accessCookie, nav, setIsLogin, tokenDev, getUserInfo]);
};

export default useAuthentication;
