/*
 * @Descripttion: 十进制转二进制
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-24 20:46:04
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-24 22:55:45
 */
import Stack from "../lib/stack-array"
let stack = new Stack()

function transformBinary(num:number):string {
  let res = ""
  let _num = num
  while (_num > 0) {
    stack.push(_num % 2)
    _num = Math.floor(_num / 2)
  }
  while (stack.size() > 0) {
    res += stack.pop()
  }
  return res
}
let binary = transformBinary(3)
console.log(binary)