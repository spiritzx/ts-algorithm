/*
 * @Descripttion: 动态规划爬楼梯测试
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-16 20:10:55
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-16 20:20:29
 */
import { climbStairs, climbStairsOne, climbStairsTwo } from "../../src/DP/climbStairs";

const { expect } = require("chai");

describe("动态规划之爬楼梯", () => {
  it("递归解决", () => {
    let res = climbStairs(23);
    expect(res).to.be.equal(46368)
  })
  it("递归+记忆解决", () => {
    let res = climbStairsOne(23);
    expect(res).to.be.equal(46368)
  })
  it.only("动态规划", () => {
    let res = climbStairsTwo(23);
    expect(res).to.be.equal(46368)
  })
})