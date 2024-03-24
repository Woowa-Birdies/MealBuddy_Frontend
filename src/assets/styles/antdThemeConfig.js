import { theme as antdTheme } from 'antd';

// https://ant.design/docs/react/customize-theme 참고
const antdThemeConfig = {
  // SeedToken
  token: {
    fontFamily: 'Pretendard',
    colorPrimary: '#FF544A',
  },
  algorithm: [antdTheme.defaultAlgorithm],
  components: {
    Button: {},
    Typography: {},
    Spin: {
      dotSize: 28,
    },
  },
};

export default antdThemeConfig;
