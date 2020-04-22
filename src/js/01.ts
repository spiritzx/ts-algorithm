/*
 * @Descripttion: 回文测试 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-22 19:38:30
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-22 21:46:19
 */
import Stack from "../lib/stack-array"

let str1:string = "121121"
let str2:string = "122abba"

function isPalindromic(str:string):boolean {
  let _str:string = str
  let res:string = ""
  let len:number = _str.length
  let stack:Stack = new Stack()
  for (let i:number = 0; i < len; i++) {
    stack.push(str[i])
  }
  console.log(stack.log())
  while (stack.size() > 0) {
    res += stack.pop()
  }
  return res === _str
}

let flag1:boolean = isPalindromic(str1)
let flag2:boolean = isPalindromic(str2)
console.log(flag1)
console.log(flag2)