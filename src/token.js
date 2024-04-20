/* eslint-disable import/prefer-default-export */
export const TOKEN_DEV =
  'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6Il9fU2VjdXJlLWFjY2VzcyIsInVzZXJJZCI6MTE4LCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEzNjE3ODk5LCJleHAiOjE3MTM2MTk2OTl9.0idNNYhqPRtRHBmIYuipjeL5-4EVTcMz1ORzKR-kZKQ';

export const getTokenDev = () => localStorage.getItem('TOKEN_DEV');
export const setTokenDev = (token) => localStorage.setItem('TOKEN_DEV', token);
export const clearTokenDev = () => localStorage.removeItem('TOKEN_DEV');
