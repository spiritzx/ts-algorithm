/*
 * @Descripttion: 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-02 09:12:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-02 09:50:42
 */ 

// 1. 创建一个数组长度为5的数组
// 2. 生成 2 - 32 随机数
// 3. 递归先前创建的数组，插入不不重复的值

function radomArr(len:number = 5, min:number = 2, max:number = 32):Array<number> {
  let arr:Array<number> = new Array(len)
  let i = 0
  function radomFn(min:number, max:number):number {
    let res = 0
    res = parseInt((Math.random() * (max - min + 1) + min) + "", 10); 
    return res
  }
  function mapArr() {
    let num:number = radomFn(min, max)
    if (i < len) {
      if (arr.indexOf(num) >= 0) {
        mapArr()
      } else {
        arr[i] = num
        i++
        mapArr()
      }
    }
  }
  mapArr()
  return arr
}


let resArr = radomArr(10, 0, 64)
console.log(resArr)