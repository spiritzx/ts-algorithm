/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-14 22:25:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-16 20:16:27
 */
import fib from "../../src/lib/Fibonacci";

const { expect } = require("chai");

describe("斐波那契数列", () => {
  it("递归计算", () => {
    let res = fib.getFibFn(4);
    expect(res).to.be.equal(5);
  })
  it("递归 + 记忆对象", () => {
    let res = fib.getFibOneFn(40);
    console.log(res);
    expect(res).to.be.equal(89);
  })
  it("动态规划", () => {
    let res = fib.getFibTwoFn(24);
    console.log(res);
    expect(res).to.be.equal(46368);
  })
})