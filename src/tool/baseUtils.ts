/*
 * @Descripttion: 基础工具函数
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-13 14:54:32
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 15:08:24
 */
export function isNumberOrString(val: any) {
  let flag = true;
  if (typeof val !== 'string' && typeof val !== 'number') {
    throw new Error("书籍类型错误, 只支持数字或字符串");
  }
  return flag;
}