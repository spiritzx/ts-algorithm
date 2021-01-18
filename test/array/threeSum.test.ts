/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 21:44:57
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-18 22:40:41
 */
var { expect } = require('chai');
const { threeSum } = require('../../src/array/2021/04');

describe("三数之和",  function () {
  it('输入[-1,0,1,2,-1,-4]', function () {
    console.time('runTime')
    expect(threeSum([-1,0,1,2,-1,-4])).to.be.eql([[-1,-1,2],[-1,0,1]]);
    console.timeEnd('runTime')
  });
})
