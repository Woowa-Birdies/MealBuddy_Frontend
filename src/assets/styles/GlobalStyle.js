import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* --------------------------------------------------------------- *
  *  FONT FACE
  * --------------------------------------------------------------- */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard'),//1순위
      url('/assets/fonts/Pretendard-Regular.subset.woff2') format('woff2'),//2순위
      url('/assets/fonts/Pretendard-Regular.woff2') format('woff2');//3순위
  }


  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard'),//1순위
      url('/assets/fonts/Pretendard-SemiBold.subset.woff2') format('woff2'),//2순위
      url('/assets/fonts/Pretendard-SemiBold.woff2') format('woff2');//3순위
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard'),//1순위
      url('/assets/fonts/Pretendard-Bold.subset.woff2') format('woff2'),//2순위
      url('/assets/fonts/Pretendard-Bold.woff2') format('woff2');//3순위
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border: 0 solid;  
  }

  html, body {
    width: 100vw;
    height: 100vh;
    font-size: 12px;
    font-family: ${({ theme }) => theme.fontFamily.default};
  }

  body, fieldset, ol, ul {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;
    margin: auto;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  svg {
    display: inline-block;
  }

  ol, ul {
    list-style: none;
  }

  /* --------------------------------------------------------------- *
  *  Scrollbar
  * --------------------------------------------------------------- */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.darkgray};
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color:  ${({ theme }) => theme.color.darkgray};
    background-clip: border-box;
  }

  ::-webkit-scrollbar-track {
    background-color:${({ theme }) => theme.color.whitesmoke};
  }

  /* ************************************************ 반응형 576px************************************************ */
  @media ${({ theme }) => theme.deviceSize.sm} {
    #root {
      width: 100vw;
      height: 100vh;
      margin: auto;
      overflow: hidden;
      border: none;
    }
  }
`;

export default GlobalStyle;
