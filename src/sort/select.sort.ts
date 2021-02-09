/*
 * @Descripttion: 选择排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 14:56:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 15:00:43
 */
export function selectSort(params: number[]) {
  let arr = params.concat([]);
  let i = 0;
  for (; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++ ) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}