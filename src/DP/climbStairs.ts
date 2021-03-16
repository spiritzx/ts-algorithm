/*
 * @Descripttion: 爬楼梯
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-16 19:59:25
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-16 20:20:55
 */
/* 
  * 爬楼梯
  * 动态规划,斐波那契数列
  * 1楼: 1
  * 2楼: 2
  * 3楼: 3
  * 4楼: 5
  * 6楼: 8
 */

export function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 2) + climbStairs(n - 1);
}

export function climbStairsOne(n: number): number {
  let obj = {};
  obj[1] = 1;
  obj[2] = 2;
  if (obj[n] === undefined) {
    obj[n] = climbStairs(n);
  } 
  return obj[n];
}

export function climbStairsTwo(n: number): number {
  let obj = {};
  obj[1] = 1;
  obj[2] = 2;
  for (let i = 3; i <= n; i++) {
    obj[i] = obj[i - 2] + obj[i - 1];
  }
  return obj[n];
}