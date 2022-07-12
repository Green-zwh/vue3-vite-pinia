/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 10:52:45
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-05 13:13:11
 * @FilePath: \vue3-vite-test\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'; // 引入，用于后续别名配置

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8000, //启动端口
    host: '0.0.0.0', // 这里修改就可以通过本机ip访问地址
    open: true,
    // hmr: {
    //     host: '127.0.0.1',
    //     port: 8080
    // },
    // 设置 https 代理
    // proxy: {
    //   '/api': {
    //       target: 'your https address',
    //       changeOrigin: true,
    //       rewrite: (path: string) => path.replace(/^\/api/, '')
    //   }
    // }
  }

})
