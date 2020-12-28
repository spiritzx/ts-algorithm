/*
 * @Descripttion: 获取地址中的请求参数
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-12-27 20:37:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-12-28 21:14:39
 */

const url = "https://www.baidu.com?a=1&b=2";

function getQueryParams(url:string) {
  const obj = {};
  if (url.indexOf('?') < 0) return obj;
  const paramsStr = url.split('?')[1];
  let paramsArr = paramsStr.split('&');
  paramsArr.forEach(val => {
    const arr = val.split("=");
    obj[arr[0]] = arr[1];
  })
  return obj;
}

function getQueryParamsOne(url:string) {
  const obj = {};
  if (url.indexOf('?') < 0) return;
  const reg = /([^&=?]+)=([^&=?]+)/g
  url.replace(reg, (...arg):string => {
    console.log(arg);
    obj[arg[1]] = arg[2];
    return arg[0]
  })
  return obj;
}
console.log(getQueryParamsOne(url));