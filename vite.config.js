/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';
import svgrPlugin from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'; // 여기에 변수 선언

  return {
    server: !isProduction
      ? {
          // 개발 환경에서만 HTTPS 설정 적용
          https: {
            key: fs.readFileSync(path.resolve(__dirname, './certs/localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './certs/localhost.pem')),
          },
        }
      : {},
    plugins: [
      react(),
      svgrPlugin(),
      !isProduction
        ? checker({
            // 개발 환경에서만 ESLint 체커 사용
            eslint: {
              lintCommand: 'eslint "./src/**/*.{js,jsx}"',
            },
          })
        : [],
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@page': path.resolve(__dirname, 'src/page'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@route': path.resolve(__dirname, 'src/route'),
        '@enums': path.resolve(__dirname, 'src/enums'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: !isProduction, // 프로덕션 환경에서는 소스 맵 비활성화
      assetsInlineLimit: 4096, // 4KB 미만 파일을 인라인으로 처리
      rollupOptions: {
        treeshake: true,
        output: {
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split('.').pop();
            // 파일 확장자에 따라 폴더 및 파일 형식 결정
            if (/^(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(extType)) {
              return `assets/img/[name]-[hash][extname]`;
            }
            if (/^(css|scss|sass)$/i.test(extType)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            if (/^(js|jsx)$/i.test(extType)) {
              return `assets/js/[name]-[hash][extname]`;
            }
            return `assets/misc/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
        },
        manualChunks(id) {
          // 코드 분할 최적화
          if (id.includes('node_modules')) {
            return 'vendors';
          }
          return null;
        },
      },
    },
  };
});
