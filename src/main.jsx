import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from '@/assets/styles/Theme';
import GlobalStyle from '@/assets/styles/GlobalStyle';
import App from '@/App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SYSTEM_MODE } from '@/constants/Constants';
import { ENVMODE } from '@/enums/CommonEnum';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>

    {/* 운영환경에서는 ReactQueryDevtools 렌더링안되게 */}
    {SYSTEM_MODE !== ENVMODE.PROD && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryClientProvider>,
);
