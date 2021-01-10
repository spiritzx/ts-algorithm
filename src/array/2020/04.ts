/*
 * @Descripttion: 将数组随机排序
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-12-17 20:58:07
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-12-17 21:48:25
 */
{
  let arr:number[] = [];
  for (let index = 0; index < 1000000; index++) {
    arr.push(index);
  }
  function randomSort(arr:number[]) {
    let _arr = arr.concat([]);
    return _arr.sort(() => {
      return Math.random() - 0.5
    })
  }
  function randomSortOne(arr:number[]) {
    let _arr = arr.concat([]);
    let res:number[] = []
    for (let i = 0; i < arr.length; i++) {
      let index = Math.floor(Math.random() * _arr.length);
      res = res.concat(_arr.splice(index, 1));
    }
    return res;
  }
  function randomSortTwo(arr:number[]) {
    let _arr = arr.concat([]);
    for (let i = 0; i < Math.ceil(_arr.length / 2); i++) {
      let index = Math.floor(Math.random() * _arr.length);
      [_arr[i], _arr[index]] = [_arr[index], _arr[i]]
    }
    return _arr;
  }

  console.time("run");
  randomSortTwo(arr);
  console.timeEnd("run");
}