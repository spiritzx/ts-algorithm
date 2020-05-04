/*
 * @Descripttion: 链表
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-03 16:34:30
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-04 22:11:25
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

  // insert:Function
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

  public insert(position:number, ele:any):boolean {
    if (position < 0 || position > this.size) {
      return false
    } else {
      let current:nodeInterface = this.header
      let newEle = new NodeObj(ele)

      let index:number = 0
      if (position === 0) {
        newEle.next = current.next
        current.next = newEle
        return true
      }
      while (index < position) {
        current = current.next
        index++
      }
      newEle.next = current.next
      current.next = newEle
      return true
    }
    
  }
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
console.log(listNode.display())