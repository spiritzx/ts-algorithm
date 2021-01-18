/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-17 16:38:38
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-18 21:45:05
 */
var { expect } = require('chai');
const { maxArea } = require('../../src/array/2021/03');

describe('获得数组最大区域', function () {
  it('输入[4,3,2,1,4]', function () {
    console.time('runTime')
    expect(maxArea([4,3,2,1,4])).to.be.equal(16);
    console.timeEnd('runTime')
  });
  it('输入[1,8,6,2,5,4,8,3,7]', function () {
    console.time('runTime')
    expect(maxArea([1,8,6,2,5,4,8,3,7])).to.be.equal(49);
    console.timeEnd('runTime')
  });
})