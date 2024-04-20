import { TOKEN_DEV } from '@/token';
import { SYSTEM_MODE } from '@constants/Constants';
import useLoadingStore from '@store/useLoadingStore';
// import useLoginStore from '@store/useLoginStore';
import useModalWarningStore from '@store/useModalWarningStore';
import Cookies from 'js-cookie';

const interceptorsOf = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      useLoadingStore.getState().setLoading(true);
      const accessCookie = Cookies.get('__Secure-access');
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: SYSTEM_MODE === 'prod' ? `Bearer ${accessCookie}` : `Bearer ${TOKEN_DEV}`,
        },
      };

      return newConfig;
    },
    (error) => {
      useLoadingStore.getState().setLoading(false);
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      useLoadingStore.getState().setLoading(false);
      return response;
    },
    (error) => {
      useLoadingStore.getState().setLoading(false);
      if (error.response && error.response.status === 401) {
        // console.log('error');
      } else if (error.code === 'ERR_NETWORK') {
        // warning modal을 띄운다.
        useModalWarningStore.getState().setContent('먼저 로그인해주세요.');
        useModalWarningStore.getState().setIsWarningOpen(true);
        // useLoginStore.getState().setIsLogin(false);
      } else {
        // console.error('Error response:', error);
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default interceptorsOf;
