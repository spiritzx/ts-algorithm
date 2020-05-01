/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-25 11:23:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-01 10:07:32
 */
import Queue from "../lib/queue-array"


// queue.push(1)
// queue.push(2)
// queue.push(3)
// console.log(queue.log())
// queue.pop()
// console.log(queue.log())

function pastGameFn(arr:Array<number | string>, num:number):number | string {
  let queue = new Queue()
  let res:string|number = ""
  let _num:number = 0
  if (num < 0) {
    return res
  } else {
    _num = num
  }
  arr.forEach((ele:string|number) => {
    queue.push(ele)
  })
  while (queue.size() > 1) {
    for (let index:number = 0; index < _num - 1; index++) {
      queue.push(queue.pop())
    }
    queue.pop()
  }
  res = queue.peek()
  return res 
}
let arr:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = pastGameFn(arr, 2)
console.log(res)