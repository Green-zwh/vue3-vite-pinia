/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 10:52:45
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-06 14:01:52
 * @FilePath: \vue3-vite-test\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/routers';

createApp(App).use(store).use(router).mount('#app')
