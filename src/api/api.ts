/*
 * @Author: zwh 834712578@qq.com
 * @Date: 2022-07-05 15:52:17
 * @LastEditors: zwh 834712578@qq.com
 * @LastEditTime: 2022-07-06 15:16:05
 * @FilePath: \vue3-vite-test\src\api\api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import https from "@/utils/axios";

export function getdata() {
  return https.get('/data')
}