/*
 * @Descripttion: 冒泡排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 11:38:34
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 14:56:44
 */
export function bubbleSort(params: number[]) {
  let arr = params.concat([]);
  let i = 0;
  for (; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++ ) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}

