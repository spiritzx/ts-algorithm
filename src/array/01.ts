/*
 * @Descripttion: 数组拍平
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-12-10 20:12:52
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-12-10 21:05:37
 */
let arr01:any[] = [
  [1],
  2,
  [[1], 2, 3],
  [1, [2], [[3, [4], [[5, [6],]]]]],
  7
];

function flatFn(arr:any[]) {
  let res:number[] = [];
  function handleFn(arr:any[]) {
    arr.forEach((val: [] | number) => {
      if (Array.isArray(val)) {
        handleFn(val);
      } else {
        res.push(val);
      }
    })
  }
  handleFn(arr);
  return res;
}

// console.log(flatFn(arr01));

function flatOneFn(arr:any[]) {
  let res:number[] = [];
  let str:string = arr.toString();
  res = str.split(",").map(val => {
    return Number(val);
  });
  return res;
}

// console.log(flatOneFn(arr01));

function flatTwoFn(arr:any[]) {
  let res:number[] = [];
  let str:string = JSON.stringify(arr);
  let _str:string = str.replace(/(\[|\])/g, "");
  res = _str.split(",").map(val => {
    return val;
  }) as unknown as number[];
  return res;
}

// console.log(flatTwoFn(arr01));


function flatThreeFn(arr:any[]) {
  let res:number[] = [];
  res = arr.flat(Infinity);
  return res;
}

console.log(flatThreeFn(arr01));

