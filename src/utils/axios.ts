/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 13:49:17
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-06 16:37:04
 * @FilePath: \vue3-vite-test\src\utils\axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import baseUrl from '@/api/baseUrl'

console.log("当前基本地址", baseUrl)
const service = axios.create({
  baseURL: baseUrl, // 请求基本路径
  timeout: 10000, // 超时时间
  // headers: {'Content-Type':'application/json;charset=UTF-8'},
  // 

});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something

    // 请求头增加token
    // if (token && config.headers) {
    //   // 请求头token信息，请根据实际情况进行修改
    //   config.headers['Authorization'] = token;
    // }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response
  },
  (error: any) => {
    // do something
    console.log(`err${error}`)
    return Promise.reject(error);
  }
);

export default service;