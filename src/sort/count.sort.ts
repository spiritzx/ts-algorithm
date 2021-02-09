/*
 * @Descripttion: 计数排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-09 20:28:41
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 20:47:28
 */
export function countSort(params: number[]) {
  let arr = params.concat([]);
  let res = []
  let i = 0;
  let obj = {};
  for (; i < arr.length; i++) {
    let value = obj[arr[i]];
    if (value != undefined) {
      obj[arr[i]] = ++value;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let num in obj) {
    if (obj.hasOwnProperty(num)) {
      for (let i = 0; i < obj[num]; i++) {
        res.push(num);
      }
    }
  }
  return res;
}
