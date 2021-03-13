/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-13 14:11:06
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 18:42:13
 */
import { NodeInterface, listNodeInterface, NodeObj } from './listNode';
import { isNumberOrString } from "../tool/baseUtils";

class ListNode02 implements listNodeInterface {
  private header = new NodeObj("header");
  size = 0; 
  constructor(nums: NodeInterface["element"][]) {
    for (let i = 0; i < nums.length; i++) {
      this.append(nums[i]) 
    }
  }
  // 尾部添加数据
  append(val: NodeInterface["element"]) {
    isNumberOrString(val);
    let current = this.header as NodeInterface;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new NodeObj(val);
    this.size++;
  }
  // 找到位置后面插入数据
  insert(index: number, val: NodeInterface["element"]) {
    isNumberOrString(val);
    let current = this.get(index);
    if (!current) return;
    let next = current ? current.next : null;
    current.next = new NodeObj(val);
    current.next.next = next;
    this.size++;
  }
  // 找到位置上的数据
  get(index: number): NodeInterface | null {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.header as NodeInterface;
    let i = -1;
    while (i < index) {
      current = current.next as NodeInterface;
      i++;
    }
    return current;
  }
  // 链表展现数组
  display(): NodeInterface["element"][] {
    let current = this.header.next as unknown as NodeInterface;
    const res: NodeInterface["element"][] = [];
    while (current !== null) {
      res.push(current.element);
      current = current.next as NodeInterface;
    }
    return res;
  }
  // 找到数据的位置
  indexOf(val: NodeInterface['element']) {
    let current = this.header.next as unknown as NodeInterface;
    let index = 0;
    let res = -1;
    while (current && index < this.size) {
      if (current.element === val) {
        res = index;
        break;
      }
      index++;
      current = current.next as NodeInterface;
    }
    return res;
  }
  // 更新
  update(index: number, val: NodeInterface["element"]) {
    let current = this.get(index) as NodeInterface;
    if (!current) {
      return -1
    } else {
      current.element = val;
    }
  }
  // 删除某一个下标的值
  removeAt(index: number) {
    if (index < 0 && index >= this.size) {
      return -1;
    }
    let current;
    if (index === 0) {
      current = this.header;
    } else {
      current = this.get(index - 1);
    }
    if (current) {
      current.next = current?.next?.next as NodeInterface;
      this.size--;
      return true;
    } else {
      return -1;
    }
  }
  // 清空所有元素
  clear() {
    this.header.next = null;
  }
  // 得到链表
  listNode() {
    return this.header.next;
  }
}

module.exports = ListNode02;