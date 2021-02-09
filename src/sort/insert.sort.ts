/*
 * @Descripttion: 插入排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 15:45:58
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 16:11:07
 */
export function insertSort(params: number[]) {
  let arr = params.concat([]);
  let i = 1;
  for (; i < arr.length; i++) {
    let j = i;
    while (j > 0) {
      if (arr[j] > arr[j-1]) {
        break;
      }
      [arr[j], arr[j-1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}