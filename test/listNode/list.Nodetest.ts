/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-13 18:30:00
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 18:51:19
 */
var expect = require('chai').expect;
const ListNode = require('../../src/lib/listNode_02');

describe("链表",  function () {
  it('生成节点', function () {
    let listNode = new ListNode([1, 2, 3])
    let res = listNode.display();
    expect(res).to.be.eql([1, 2, 3]);
  });
  it('插入节点', function () {
    let listNode = new ListNode([1, 2, 3]);
    listNode.insert(2, 4)
    let res = listNode.display();
    console.log(res);
    expect(res).to.be.eql([1, 2, 3, 4]);
  });
  it('获得节点', function () {
    let listNode = new ListNode([1, 2, 3]);
    let res = listNode.get(1);
    expect(res.element).to.be.equal(2);
  });
  it('更新节点', function () {
    let listNode = new ListNode([1, 2, 3]);
    listNode.update(1, 2.5);
    const res = listNode.get(1);
    expect(res.element).to.be.equal(2.5);
  });
  it('删除某个节点', function () {
    let listNode = new ListNode([1, 2, 3]);
    listNode.removeAt(1);
    const res = listNode.display();
    expect(res).to.be.eql([1, 3]);
  });
  it.only('清除所有节点', function () {
    let listNode = new ListNode([1, 2, 3]);
    listNode.clear();
    const res = listNode.display();
    expect(res).to.be.eql([]);
  });
})