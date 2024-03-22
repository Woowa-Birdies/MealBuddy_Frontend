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

  html {
    line-height: 1.4;
    word-break: keep-all;
    -ms-scroll-chaining: none;
    overscroll-behavior: none;
    letter-spacing: -.02em;
    tab-size: 4;
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-width: 280px;
    padding: env(safe-area-inset-top,20px) env(safe-area-inset-right,20px) env(safe-area-inset-bottom,20px) env(safe-area-inset-left,20px);
  }

  html, body {
    font-size: 12px;
    font-family: ${({ theme }) => theme.fontFamily.default};
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body, fieldset, ol, ul {
    margin: 0;
    padding: 0;
  }
  #root {
    width: 100vw;
    height: 100vh;
    margin: auto;
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
  body ::-webkit-scrollbar{
    width: 5px;
    height: 5px;
  }

  body ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: rgba(0,0,0,.15);
  }

  body ::-webkit-scrollbar-track {
    background-color: transparent;
}

  /* ************************************************ 반응형 576px************************************************ */
  @media ${({ theme }) => theme.deviceSize.sm} {
    #root {
      width: 100vw;
      height: 100vh;
      margin: auto;
      border: none;
    }
  }
`;

export default GlobalStyle;
