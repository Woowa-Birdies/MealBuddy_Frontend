/* eslint-disable import/prefer-default-export */
export const TOKEN_DEV =
  'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6Il9fU2VjdXJlLWFjY2VzcyIsInVzZXJJZCI6MTI0LCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEzNjIzODYwLCJleHAiOjE3MTM2MjU2NjB9.q-NU3xCCHDMSfEC_t5qj8_9GML9f_6D32xXeUP5d9F8';

export const getTokenDev = () => localStorage.getItem('TOKEN_DEV');
export const setTokenDev = (token) => localStorage.setItem('TOKEN_DEV', token);
export const clearTokenDev = () => localStorage.removeItem('TOKEN_DEV');
