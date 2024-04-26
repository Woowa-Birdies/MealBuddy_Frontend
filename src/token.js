/* eslint-disable import/prefer-default-export */
export const TOKEN_DEV = '';

export const getTokenDev = () => localStorage.getItem('TOKEN_DEV');
export const setTokenDev = (token) => localStorage.setItem('TOKEN_DEV', token);
export const clearTokenDev = () => localStorage.removeItem('TOKEN_DEV');
