import useLoadingStore from '@store/useLoadingStore';

const interceptorsOf = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      useLoadingStore.getState().setLoading(true);
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6Il9fU2VjdXJlLWFjY2VzcyIsInVzZXJJZCI6NTEsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTM1Nzk4NzYsImV4cCI6MTcxMzU4MTY3Nn0.vSuCu47WDDzj_xrhFCaelnLh-HISclmXogbt0JL-Uc8`,
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
      } else {
        // console.error('Error response:', error);
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default interceptorsOf;
