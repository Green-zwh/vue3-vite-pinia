/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 13:18:07
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-05 13:18:57
 * @FilePath: \vue3-vite-test\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  actions: {
    updateName(name: any) {
      this.name = name
    }
  }
})