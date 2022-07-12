<!--
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 13:19:23
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-06 14:47:13
 * @FilePath: \vue3-vite-test\src\pages\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  这是个简单的主页罢了 ，{{userStore.name}}
  <br>
  <!-- 鼠标位置{{x}} x , {{y}} y -->
  <div></div>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/store/user';
import { useMouse } from '@vueuse/core'
import { getdata } from '@/api/api'
import axios from 'axios';
const userStore = useUserStore()
const { x, y } = useMouse()

//  当前环境
console.log("当前环境",import.meta.env.MODE)


// // 对接口进行请求
getdata().then(res => {
  console.log("接口返回数据",res)
},err => {
  console.log(err)
})
// axios.get('http://192.168.101.200:4000/data').then(res =>{
//   console.log(res)
// })
</script>

<style lang='less' scoped>
div{
  width: 100px;
  height: 100px;
  background: #000;
}
</style>