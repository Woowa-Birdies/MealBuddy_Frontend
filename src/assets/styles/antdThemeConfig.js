import { theme as antdTheme } from 'antd';

// https://ant.design/docs/react/customize-theme 참고
const antdThemeConfig = {
  // SeedToken
  token: {
    fontFamily: 'Pretendard',
  },
  algorithm: [antdTheme.defaultAlgorithm],
  components: {
    Button: {},
    Typography: {},
  },
};

export default antdThemeConfig;
