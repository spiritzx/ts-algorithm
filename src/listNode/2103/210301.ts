/*
 * @Descripttion: 链表两数相加
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-13 22:09:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 23:11:10
 */

 
/*
 * 1. 要求
 * listNode([1, 2, 3]) + listNode [1, 2] = listNdoe([2, 4, 3])
 * listNode([9, 9, 9]) + listNode [9, 9] = listNdoe([8, 9, 0, 1])
 * 2. 应用
 * 大数相加,因为js 的 IEEE 754 64 位双精度浮点数精度影响, 他最大值是 9007199254740991,超过了就不能进行运算
 * 3. 解题思路
 *    1. 短的链表补零
 *    2. 记录进位是否要加一
 */

import { NodeInterface, NodeObj } from "../../lib/listNode";

export const addTwoNumbers = (l1: NodeInterface, l2: NodeInterface) => {
  let head = null as unknown as NodeInterface;
  let current = head;
  //  记录进位
  let temp = 0;
  while (l1 || l2) {
    //  短链表补零
    let l1Val = l1 ? l1.element as number : 0;
    let l2Val = l2 ? l2.element as number : 0;
    let total = l1Val + l2Val + temp;
    
    if (!head) {
      head = new NodeObj(total % 10);
      current = head;
    } else {
      current.next = new NodeObj(total % 10);
      current = current.next;
    }
    // 进位加一
    temp = total >= 10 ? 1 : 0;
    if (l1) {
      l1 = l1.next as NodeInterface;
    }
    if (l2) {
      l2 = l2.next as NodeInterface
    }
  }
  if (temp > 0) {
    // 如果最后进位有值则链表尾部加一
    current.next = new NodeObj(temp);
  }
  return head;
}