/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 22:38:06
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-18 22:38:07
 */
var { expect } = require('chai');
const { twoSumThree } = require('../../src/array/2020/05');

describe("两数之和",  function () {
  it.only('输入[2,7,11,15], 9', function () {
    console.time('runTime')
    expect(twoSumThree([2,7,11,15], 9)).to.be.eql([0,1]);
    console.timeEnd('runTime')
  });
})