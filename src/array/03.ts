/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-12-13 10:51:16
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-12-13 11:20:44
 */
console.log("斐波那契数列");
console.log([1, 1, 2, 3, 5, 8, 13, 21, 34]);

{
  function getFibonacciFn(index: number):number {
    if (index <= 1) return 1;
    let arr:number[] = [1, 1];
    const end: number = index - 2 + 1;
    let j: number = 0;
    while (j < end) {
      let prev = arr[j];
      let next = arr[j+1]
      arr.push(prev + next);
      j++;
    }
    return arr[index];
  }

  function getFibonacciOneFn(index: number):number {
    if (index <= 1) return 1;
    let arr:number[] = [1, 1];
    function handleFn(arr: number[], prev: number, next: number) {
      arr.push(prev + next);
      if (arr.length < index + 1) {
        handleFn(arr, arr[arr.length - 2], arr[arr.length - 1])
      }
    }
    handleFn(arr, 1, 1);
    return arr[index];
  }
  
  console.time("time");
  console.log(getFibonacciOneFn(100));
  console.timeEnd("time");

}