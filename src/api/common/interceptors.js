import { TOKEN_DEV } from '@/token';
import { API_BASE_URL, SYSTEM_MODE } from '@constants/Constants';
import useLoadingStore from '@store/useLoadingStore';
// import useLoginStore from '@store/useLoginStore';
import useModalWarningStore from '@store/useModalWarningStore';
import axios from 'axios';
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
    async (error) => {
      useLoadingStore.getState().setLoading(true);
      if (error.response && error.response.status === 401 && !error.config.retryAttempt) {
        const originalRequest = error.config;
        originalRequest.retryAttempt = true;
        try {
          const reissueResponse = await axios.post(
            `${API_BASE_URL}/reissue`,
            {},
            { withCredentials: true },
          );
          const authHeader = reissueResponse.headers.authorization;
          const newToken = authHeader ? authHeader.split(' ')[1] : null;

          if (newToken) {
            // 새 토큰으로 쿠키와 헤더를 업데이트합
            Cookies.set('__Secure-access', newToken, { secure: true, httpOnly: true });
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            // 토큰 갱신 후 원래 요청 재시도
            useLoadingStore.getState().setLoading(false);
            return axiosInstance(originalRequest);
          }
        } catch (reissueError) {
          useModalWarningStore.getState().setContent('세션이 만료되었습니다. 다시 로그인해주세요.');
          useModalWarningStore.getState().setIsWarningOpen(true);
          useLoadingStore.getState().setLoading(false);
          return Promise.reject(reissueError); // 재발급 실패 시 에러 반환
        }
      } else if (error.code === 'ERR_NETWORK') {
        useModalWarningStore
          .getState()
          .setContent('네트워크 오류가 발생했습니다. 다시 시도해 주세요.');
        useModalWarningStore.getState().setIsWarningOpen(true);
      } else {
        console.error('Error response:', error);
      }
      useLoadingStore.getState().setLoading(false);
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default interceptorsOf;
