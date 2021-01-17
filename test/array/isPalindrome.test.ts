/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-17 16:08:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-17 16:40:08
 */
var expect = require('chai').expect;
const { isPalindrome } = require('../../src/array/2021/02');

describe.skip('测试回文数字', function () {
  it('输入回文数字', function () {
    console.time('runTime')
    expect(isPalindrome(123321)).to.be.equal(true);
    console.timeEnd('runTime')
  });
  it('输入非回文数字', function () {
    console.time('runTime')
    expect(isPalindrome(123320)).to.be.equal(false);
    console.timeEnd('runTime')
  });
})