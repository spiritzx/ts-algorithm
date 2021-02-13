/*
 * @Descripttion: 防抖与节流
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-13 19:40:43
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-13 21:38:16
 */

// 后置防抖
export function afterDebounce(fn: Function, delay = 300): (this: HTMLBodyElement, ev: MouseEvent) => any {
  let timeId: NodeJS.Timeout|null = null;
  return function (...arg) {
    if (timeId !== null) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      fn.call(this, ...arg)
    }, delay)
  }
}
// 前置防抖
export function beforeDebounce(fn: Function, delay = 300): (this: HTMLBodyElement, ev: MouseEvent) => any {
  let timeId: NodeJS.Timeout|null = null;
  return function (...arg) {
    if (timeId === null) {
      fn.call(this, ...arg);
    }
    clearTimeout(timeId as NodeJS.Timeout);
    timeId = setTimeout(() => {
      clearTimeout(timeId as NodeJS.Timeout);
      timeId = null;
    }, delay)
  }
}
// 节流

export function throttle(fn: Function, delay = 500): (this: HTMLBodyElement, ev: MouseEvent) => any {
  let timeId: NodeJS.Timeout|null = null;
  return function (...arg) {
    if (timeId === null) {
      timeId = setTimeout(() => {
        fn.call(this, ...arg);
        clearTimeout(timeId as NodeJS.Timeout);
        timeId = null;
      }, delay)
    } 
  }
}

const obj = {
  a: 1,
  fn(e: Event) {
    console.log(e);
    console.log(this.a)
  }
}

const dom: HTMLBodyElement = document.getElementsByTagName("body")[0];
dom.addEventListener("mousemove", throttle(obj.fn), false)