const interceptorsOf = (axiosInstance) => {
  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      console.log('Request sent with config:', config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
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
