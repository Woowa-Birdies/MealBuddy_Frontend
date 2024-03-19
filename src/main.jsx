import App from '@/App';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SYSTEM_MODE } from '@/constants/Constants';
import { ENVMODE } from '@/enums/CommonEnum';
import { ConfigProvider } from 'antd';
import koKR from 'antd/lib/locale/ko_KR'; // antd 한국어 locale
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 locale 패키지 import
import antdThemeConfig from '@/assets/styles/antdThemeConfig';
import GlobalStyle from '@/assets/styles/GlobalStyle';
import theme from '@/assets/styles/theme';

dayjs.locale('ko'); // 기본 locale을 한국어로 설정

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider locale={koKR} theme={antdThemeConfig}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ConfigProvider>

    {/* 운영환경에서는 ReactQueryDevtools 렌더링안되게 */}
    {SYSTEM_MODE !== ENVMODE.PROD && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryClientProvider>,
);
