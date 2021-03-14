/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-14 22:15:00
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 22:55:19
 */

function getFibFn(n: number):number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return getFibFn(n - 2) + getFibFn(n - 1)
}

function fibOneHandleFn(n: number, obj: object): number {
  if (n === 0) obj[0] = 0;
  if (n === 1) obj[1] = 1;
  if (obj[n] === undefined) 
  obj[n] = fibOneHandleFn(n - 2, obj) + fibOneHandleFn(n - 1, obj);
  return obj[n];
}

function getFibOneFn(n: number):number {
  let obj = {}; // 记忆载体
  return fibOneHandleFn(n, obj)
}

function getFibTwoFn(n: number):number {
  let obj = {}; // 记忆载体
  obj[0] = 0;
  obj[1] = 1;
  for (let i = 2; i <= n; i ++) {
    obj[i] = obj[i - 2] + obj[i - 1]; 
  }
  return obj[n]
}
export default {
  getFibFn,
  getFibOneFn,
  getFibTwoFn
}