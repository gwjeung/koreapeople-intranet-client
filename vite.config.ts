import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { visualizer } from 'rollup-plugin-visualizer';

const timestamp = Date.now();

const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    // visualizer(),
    compression({ algorithms: ['gzip'] }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        assetFileNames: `assets/[name]-[hash]-${timestamp}.[ext]`,
        experimentalMinChunkSize: Infinity,
        manualChunks(id: string) {
          if (
            id.includes('node_modules/axios') ||
            id.includes('node_modules/@apollo/client') ||
            id.includes('node_modules/graphql')
          ) {
            return '@vendor-network';
          }
          if (
            id.includes('node_modules/@remix-run') ||
            id.includes('node_modules/react-router-dom') ||
            id.includes('node_modules/react-router')
          ) {
            return '@vendor-react-router';
          }
          if (id.includes('node_modules/@korea-senior')) {
            return '@vendor-korea-senior';
          }
          if (
            id.includes('node_modules/zustand') ||
            id.includes('node_modules/validator') ||
            id.includes('node_modules/yup') ||
            id.includes('node_modules/react-hook-form') ||
            id.includes('node_modules/@hookform/resolvers')
          ) {
            return '@vendor-state-management';
          }
          if (
            id.includes('node_modules/@fluentui/react-icons') ||
            id.includes('node_modules/react-responsive') ||
            id.includes('node_modules/react-daum-postcode')
          ) {
            return '@vendor-third-party-ui';
          }
          if (
            id.includes('node_modules/xlsx') ||
            id.includes('node_modules/dayjs') ||
            id.includes('node_modules/tailwind-merge') ||
            id.includes('node_modules/tailwind-variants') ||
            id.includes('node_modules/clsx')
          ) {
            return '@vendor-utils';
          }
          if (id.includes('node_modules/lodash')) {
            return '@vendor-lodash';
          }
        },
      },
    },
  },
});
