/* eslint-disable import/prefer-default-export */
export const TOKEN_DEV =
  'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6Il9fU2VjdXJlLWFjY2VzcyIsInVzZXJJZCI6MTI0LCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEzNjIyNTg2LCJleHAiOjE3MTM2MjQzODZ9.xFSfH2g5FwXIPpxUJ1wEQxrduicgxWtw9Is9ElFE_iA';

export const getTokenDev = () => localStorage.getItem('TOKEN_DEV');
export const setTokenDev = (token) => localStorage.setItem('TOKEN_DEV', token);
export const clearTokenDev = () => localStorage.removeItem('TOKEN_DEV');
