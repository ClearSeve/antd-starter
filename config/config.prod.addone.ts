import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    baseUrl: 'https://127.0.0.1:8080/api',
    ssoServerUrl: 'https://127.0.0.1:8080/login',
  },
  extraBabelPlugins: ['transform-remove-console'],
  manifest: false,
  copy: ['extensions/browser-addone'],
});
