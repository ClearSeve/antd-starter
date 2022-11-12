import { defineConfig } from 'umi';

let dirs = __dirname.split('/');
let dirName = dirs[dirs.length - 2];

export default defineConfig({
  define: {
    // api 地址
    baseUrl: '',
    // 单点登录地址
    ssoServerUrl: '/login',
  },
  ssr: {
    devServerRender: true,
  },
  hash: true,
  // cdn 地址
  publicPath: `https://cdn.hocgin.top/${dirName}/`,
});
