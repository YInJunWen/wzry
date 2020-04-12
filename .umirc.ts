import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  // proxy: {
  //   "/api": {
  //     "target": "https://pvp.qq.com",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api": "" } //记录一下 这个地方的^/api猜测是一个正则 为了防止页面中多人开发请求地址带/api/test 直接将api替换为空 防止/api/api/test出现
  //   }
  // }
  base: '/wzry/',
  publicPath: '/wzry/',
});
