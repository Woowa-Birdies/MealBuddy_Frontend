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
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard'),//1순위
      url('/assets/font/Pretendard-Medium.subset.woff2') format('woff2'),//2순위
      url('/assets/font/Pretendard-Medium.woff2') format('woff2');//3순위
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

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard'),//1순위
      url('/assets/fonts/Pretendard-ExtraBold.subset.woff2') format('woff2'),//2순위
      url('/assets/fonts/Pretendard-ExtraBold.woff2') format('woff2');//3순위
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: ${({ theme }) => theme.fontSize.default};
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    color: ${({ theme }) => theme.fontColor.default};
    background-color: ${({ theme }) => theme.color.solitude};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, label, header, select{
    font-family: ${({ theme }) => theme.fontFamily.primary};
  }

  body,
  button,
  code,
  div,
  blockquote,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  p,
  pre,
  select,
  textarea,
  ul,
  li,
  ol,
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;
    margin: auto;
    overflow: hidden;
  }

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
