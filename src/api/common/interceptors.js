import useLoadingStore from '@store/useLoadingStore';

const interceptorsOf = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      useLoadingStore.getState().setLoading(true);
      return config;
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

      // 에러 로직 추후 잡기
      if (error.response && error.response.status === 401) {
        console.log('error');
      } else {
        console.error('Error response:', error);
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default interceptorsOf;
