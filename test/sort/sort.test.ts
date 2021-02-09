/*
 * @Descripttion: 排序算法测试
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 22:38:06
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-09 18:10:01
 */
var { expect } = require('chai');
const {randomNumberArr} = require('../../src/tool/randomNumberArr');
const {bubbleSort} = require('../../src/sort/bubble.sort');
const {selectSort} = require('../../src/sort/select.sort');
const {insertSort} = require('../../src/sort/insert.sort');
const {shellSort} = require('../../src/sort/shell.sort');
let numArr = randomNumberArr(10000);
describe("排序",  function () {
  it('10000个数冒泡排序', function () {
    expect(bubbleSort(numArr)).to.have.lengthOf(10000);
  });
  it('10000个数选择排序', function () {
    expect(selectSort(numArr)).to.have.lengthOf(10000);
  });
  it('10000个数插入排序', function () {
    expect(insertSort(numArr)).to.have.lengthOf(10000);
  });
  it.only('10000个数希尔排序', function () {
    // console.log(shellSort(numArr))
    expect(shellSort(numArr)).to.have.lengthOf(10000);
  });
})