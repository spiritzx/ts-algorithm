/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-21 17:26:50
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-21 19:04:39
 */
import { letterCombinations } from "../../src/str/2021/202103";

const { expect } = require("chai");

describe("电话号码的字母组合", () => {
  it("递归回溯解决", () => {
    let res = letterCombinations("23");
    console.log(res);
    expect(res).to.be.eql(["ad","ae","af","bd","be","bf","cd","ce","cf"])
  })
  it("递归回溯解决", () => {
    let res = letterCombinations("3");
    console.log(res);
    expect(res).to.be.eql(["d", "e", "f"])
  })
  it("递归回溯解决", () => {
    let res = letterCombinations("3254");
    console.log(res);
    expect(res).to.be.eql(["d", "e", "f"])
  })
})