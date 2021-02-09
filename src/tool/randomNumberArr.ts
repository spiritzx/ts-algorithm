/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 12:32:38
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 12:50:22
 */


export function randomSort(params: number) {
  return parseInt(`${Math.round(Math.random() * params)}`);
}
export function randomNumberArr(params = 10000) {
  let arr:number[] = [];
  for (let index = 0; index < params; index++) {
    arr.push(randomSort(params));
  }
  return arr;
}