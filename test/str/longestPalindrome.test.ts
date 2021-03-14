/*
 * @Descripttion: 最长回文字符串
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-14 12:58:01
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 13:52:37
 */
import { longestPalindrome } from "../../src/str/2021/202102";

var { expect } = require('chai');

describe("最长子回文字符串", () => {
  it("最长子回文字符串01-'abac'", () => {
    let res = longestPalindrome("abac");
    expect(res).to.be.equal("aba");
  })
  it("最长子回文字符串02-'a'", () => {
    let res = longestPalindrome("a");
    expect(res).to.be.equal("a");
  })
  it("最长子回文字符串03-'cbbd'", () => {
    let res = longestPalindrome("cbbd");
    expect(res).to.be.equal("bb");
  })
  it("最长子回文字符串04-'babad'", () => {
    let res = longestPalindrome("babad");
    console.log(res);
    expect(res).to.be.equal("bab");
  })
  it("最长子回文字符串05-'ccc'", () => {
    let res = longestPalindrome("ccc");
    console.log(res);
    expect(res).to.be.equal("ccc");
  })
  it("最长子回文字符串06-'abb'", () => {
    let res = longestPalindrome("abb");
    console.log(res);
    expect(res).to.be.equal("bb");
  })
  it.only("最长子回文字符串07-长字符串", () => {
    let str = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    let res = longestPalindrome(str);
    console.log(res);
    expect(res).to.be.equal(str);
  })
})