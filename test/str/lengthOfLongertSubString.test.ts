/*
 * @Descripttion: 最大字符串长度
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-14 10:25:06
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 10:39:24
 */
import { lengthOfLongertSubString } from "../../src/str/2021/01";

var { expect } = require('chai');

describe("最大子字符串长度", () => {
  it.only("最大子字符串长度01", () => {
    let res = lengthOfLongertSubString("abcdabc");
    expect(res).to.be.equal(4);
  })
  it.only("最大子字符串长度02", () => {
    let res = lengthOfLongertSubString("adacdebabc");
    expect(res).to.be.equal(5);
  })
})