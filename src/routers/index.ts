/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 13:34:34
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-05 13:35:19
 * @FilePath: \vue3-vite-test\src\routers\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import('@/pages/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;

