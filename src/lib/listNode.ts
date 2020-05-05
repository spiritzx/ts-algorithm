/*
 * @Descripttion: 链表
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-03 16:34:30
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-05 22:44:00
 */
interface nodeInterface {
  element: any
  next: any
}
class NodeObj implements nodeInterface {
  public element = "header"
  public next = null
  constructor(ele:any) {
    this.element = ele
  }
}

interface listNodeInterface {
  size:number // 链表数据长度
  header:NodeObj // 链表头部
  append:Function // 添加链表元素
  display:Function // 通过数组展示链表
  insert:Function // 插入数据
  get:Function // 获取某个位置的元素
  // get:Function
  // indexOf:Function
  // update:Function
}

class ListNode implements listNodeInterface  {
  public header:nodeInterface = new NodeObj("header")
  public size = 1
  // 尾部添加元素
  public append(ele:any) {
    if (this.size === 1) {
      this.header.next = new NodeObj(ele)
    } else {
      let current:nodeInterface = this.header
      while (current.next !== null) {
        current = current.next
      }
      current.next = new NodeObj(ele)
    }
    this.size++
  }
  // 插入
  public insert(position:number, ele:any):boolean {
    let current = this.get(position);
    let newEle = new NodeObj(ele)
    if (current) {
      newEle.next = current.next
      current.next = newEle
      this.size++
      return true
    } else {
      return false
    }
  }
  // 获得位置上的元素
  public get(position:number):any {
    if (position < 0 || position > this.size) {
      return null
    } else {
      let current:nodeInterface = this.header
      let index:number = 0
      while (index < position) {
        current = current.next
        index++
      }
      return current
    }
  }
  // 通过数组展示
  public display():Array<any> {
    let currObj = this.header,
        arr = [];
    while (currObj !== null) {
        arr.push(currObj.element);
        currObj = currObj.next;
    }
    return arr;
  }

}

// 测试代码
let listNode = new ListNode()
listNode.append("1")
listNode.append("2")
console.log(listNode.display())
console.log(listNode.header)
listNode.insert(2, null)
listNode.insert(0, 0)
listNode.insert(3, 3)
console.log(listNode.display())
console.log(listNode.size)
console.log(listNode.get(3))
