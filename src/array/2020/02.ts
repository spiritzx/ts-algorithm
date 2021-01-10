/*
 * @Descripttion: 数组去重
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-12-12 14:34:55
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-12-17 21:00:29
 */
{
  let arr = [];
  function randomFn(m:number, n:number) {
    return m + parseInt((Math.random() * ((n + 1) - m) ) + '');
  }
  for (let index = 0; index < 10000000; index++) {
    arr.push(randomFn(0, 10));
  }
  // set
  function getArr(arr: number[]) {
    let res:number[] = [];
    res = Array.from(new Set(arr))
    return res;
  }
  // 对象 key 值
  function getArrOne(arr: number[]) {
    let obj = {};
    let res: number[] = [];
    arr.forEach(val => {
      obj[val] = '';
    })
    obj
    res = Object.keys(obj).map(val => Number(val));
    return res;
  }
  // 多数组筛选
  function getArrTwo(arr: number[]) {
    let res: number[] = [];
    arr.forEach((val: number) => {
      if (!res.includes(val)) {
        res.push(val);
      }
    })
    return res;
  }
  // 排序后双指针筛选
  function getArrThree(arr: number[]) {
    let res: number[] = [];
    let _res = arr.sort();
    let i = 0, j = 1;
    _res.push(_res[i]);
    while (j < _res.length) {
      if (_res[i] !== _res[j]) {
        res.push(_res[j])
        i = j;
      }
      j++;
    }
    return res;
  }
  console.time("end");
  getArrThree(arr);
  console.timeEnd("end");
}