/*
 * @Descripttion: 去除字符串的空格
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-06-02 16:53:33
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-06-02 17:32:02
 */ 
function trimString(str:string, type:string) {
  if (typeof str !== 'string') {
    throw new Error("参数类型错误")
  }
  let typeObj = {
    left: /^\s+/,
    middle: /(^\s+)(\S)|\s+(\S)/g,
    right: /\s+$/,
    both: /(^\s+)|(\s+$)/g,
    all: /\s+/g
  }
  const reg:RegExp = type && typeObj[type] ? typeObj[type] : typeObj.both;
  return str.replace(reg, "")
}
let res = trimString("  ddd dd   ddd  ", "left")
console.log(res)