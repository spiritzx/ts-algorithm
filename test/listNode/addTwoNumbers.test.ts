/*
 * @Descripttion: 两数相加测试
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-13 22:58:43
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 10:31:22
 */

var expect = require('chai').expect;
import ListNode from '../../src/lib/listNode_02';
import { NodeInterface } from "../../src/lib/listNode";
import { addTwoNumbers } from "../../src/listNode/2103/210301";
import { ListNodeTOArray } from "../../src/tool/baseUtils";

describe("链表两数相加",  function () {
  it("两数相加 01", function() {
    let l1 = new ListNode([0]).listNode() as unknown as NodeInterface;
    let l2 = new ListNode([0]).listNode() as unknown as NodeInterface;
    let res = addTwoNumbers(l1, l2).element;
    expect(res).to.be.equal(0);
  })
  it("两数相加 02", function() {
    let l1 = new ListNode([9, 9]).listNode() as unknown as NodeInterface;
    let l2 = new ListNode([9, 9, 9]).listNode() as unknown as NodeInterface;
    let res = addTwoNumbers(l1, l2);
    expect(ListNodeTOArray(res)).to.be.eql([8, 9, 0, 1]);
  })
  it("两数相加 03", function() {
    let l1 = new ListNode([9,9,9,9,9,9,9]).listNode() as unknown as NodeInterface;
    let l2 = new ListNode([9,9,9,9]).listNode() as unknown as NodeInterface;
    let res = addTwoNumbers(l1, l2);
    expect(ListNodeTOArray(res)).to.be.eql([8,9,9,9,0,0,0,1]);
  })
  it("两数相加 04", function() {
    let l1 = new ListNode([2,4,3]).listNode() as unknown as NodeInterface;
    let l2 = new ListNode([5,6,4]).listNode() as unknown as NodeInterface;
    let res = addTwoNumbers(l1, l2);
    expect(ListNodeTOArray(res)).to.be.eql([7,0,8]);
  })
})