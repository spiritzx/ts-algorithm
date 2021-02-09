/*
 * @Descripttion: 希尔排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 17:02:02
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 18:08:30
 */
export function shellSort(params: number[]) {
  const arr = params.concat([]);
  const len = arr.length;
  let step = Math.floor(len / 2);
  while(step > 0) {
    for (let i = step; i < len; i++) {
      let j = i;
      while (j >= 0) {
        if (arr[j] >= arr[j-step]) break;
        if (arr[j] < arr[j-step]) {
          [arr[j], arr[j-step]] = [arr[j-step], arr[j]];
        }
        j -= step;
      }
    }
    step = Math.floor(step / 2)
  }
  return arr;
}