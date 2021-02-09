/*
 * @Descripttion: 快速排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 19:12:26
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 20:17:48
 */

function quickSortFn(arr: number[], L: number, R: number) {
  if (L >= R) return;
  const flag: number = arr[L];
  let l = L;
  let r = R;
  while (l < r) {
    while (l < r && arr[r] >= flag) {
      r--;
    }
    if (l < r) {
      arr[l] = arr[r];
    }
    while (l < r && arr[l] <= flag) {
      l++;
    }
    if (l < r) {
      arr[r] = arr[l];
    }
    if (l === r) {
      arr[l] = flag;
    }
  }
  quickSortFn(arr, L, l - 1);
  quickSortFn(arr, r + 1, R)
}
export function quickSort(params: number[]) {
  let arr = params.concat([]);
  quickSortFn(arr, 0, arr.length - 1)
  return arr;
}