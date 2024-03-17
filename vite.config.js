/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode !== 'production' // 운영버전에서는 체킹하지 않는다.
      ? [
          checker({
            eslint: {
              lintCommand: 'eslint "./src/**/*.{js,jsx}"',
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // 프로덕션 환경에서는 소스 맵 비활성화
    sourcemap: mode !== 'production',
    assetsInlineLimit: 4096, // 4KB 미만 파일을 인라인으로 처리하여 요청 수 줄임
    rollupOptions: {
      treeshake: true,
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop(); // 파일 확장자 추출
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
      // 동적 가져오기를 사용하여 코드 분할 최적화
      manualChunks(id) {
        if (id.includes('node_modules')) {
          // 노드 모듈에서 오는 모든 코드를 'vendors' 청크로 분할
          return 'vendors';
        }
        return null;
      },
    },
  },
}));
