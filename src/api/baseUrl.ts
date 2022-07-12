/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 15:10:17
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-06 14:46:47
 * @FilePath: \vue3-vite-test\src\api\baseUrl.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let baseUrl: string = ''
let env = import.meta.env.MODE 

switch (env) {
  case 'development': // 开发环境
    baseUrl = "http://192.168.101.200:4000"
    break;
  case 'production': //生产环境
    baseUrl = "localhost:3000"
    break;
}
export default baseUrl;