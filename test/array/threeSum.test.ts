/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 21:44:57
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-17 23:12:50
 */
import{ threeSum, threeSumTwo } from '../../src/array/2021/04';
var { expect } = require('chai');


describe("三数之和",  function () {
  it('输入[-1,0,1,2,-1,-4]', function () {
    console.time('runTime')
    expect(threeSum([-1,0,1,2,-1,-4])).to.be.eql([[-1,-1,2],[-1,0,1]]);
    console.timeEnd('runTime')
  });
  it.only('输入[-1,0,1,2,-1,-4]', function () {
    let res = threeSumTwo([-1,0,1,2,-1,-4]);
    console.log(res);
    expect(res).to.be.eql([[-1,-1,2],[-1,0,1]]);
  });
  it('输入[0, 0, 0]', function () {
    let res = threeSumTwo([0, 0, 0]);
    console.log(res);
    expect(res).to.be.eql([[0, 0, 0]]);
  });
  it('输入[0, 0, 0, 0]', function () {
    let res = threeSumTwo([0, 0, 0, 0]);
    console.log(res);
    expect(res).to.be.eql([[0, 0, 0]]);
  });
  it('输入[0, 0, 0, 0, 0]', function () {
    let res = threeSumTwo([0, 0, 0, 0, 0]);
    console.log(res);
    expect(res).to.be.eql([[0, 0, 0]]);
  });
  it.only('输入[0, -1, -1, -1, 1, 0]', function () {
    let res = threeSumTwo([0, -1, -1, -1, 1, 0]);
    console.log(res);
    expect(res).to.be.eql([[-1, 0, 1]]);
  });
})
