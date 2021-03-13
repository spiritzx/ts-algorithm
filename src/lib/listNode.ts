/*
 * @Descripttion: 链表
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-03 16:34:30
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 18:35:54
 */
export interface NodeInterface {
  element: number | string;
  next: null | NodeInterface;
}
export class NodeObj implements NodeInterface {
  public element = "header" as NodeInterface["element"];
  public next = null;
  constructor(ele: string | number) {
    this.element = ele;
  }
}

export interface listNodeInterface {
  size:number // 链表数据长度
  append:Function // 添加链表元素
  display:Function // 通过数组展示链表
  insert:Function // 插入数据
  get:Function // 获取某个位置的元素
  indexOf:Function // 获取某个元素的位置
  update:Function // 更新某个位置上的元素
  removeAt:Function // 删除某个位置的元素
  remove?:Function // 删除指定元素
  clear?:() => void // 删除指定元素
  listNode?:() => NodeIterator | null // 得到链表
}

class ListNode implements listNodeInterface  {
  private header:NodeInterface = new NodeObj("header")
  public size = 1
  // 判断元素是否是正确的
  private isEle(ele:any):boolean {
    let res = false
    if (ele === null || ele === undefined) {
      res = false
    } else {
      res = true
    }
    return res
  }
  // 尾部添加元素
  public append(ele:any):boolean {
    if (ele === null || ele === undefined) {
      return false
    }
    let nodeObj = new NodeObj(ele)
    let current:NodeInterface = this.header
    while (current.next !== null) {
      current = current.next
    }
    current.next = nodeObj
    this.size++
    return true
  }
  // 插入
  public insert(position:number, ele:any):boolean {
    let res = false
    if (this.isEle(ele)) {
      let current = this.get(position);
      let newEle = new NodeObj(ele)
      if (current) {
        newEle.next = current.next
        current.next = newEle
        this.size++
        res = true
      }
    }
    return res
  }
  // 获得位置上的元素
  public get(position:number):any {
    if (position < 0 || position > this.size) {
      return null
    } else {
      let current:NodeInterface = this.header
      let index:number = 0
      while (position < this.size && index < position) {
        current = current.next as  NodeInterface
        index++
      }
      return current
    }
  }
  // 获得链表的元素的位置
  public indexOf(ele:any):number {
    let index = -1
    let i = 0
    let current = this.header
    while (current) {
      if (current.element === ele) {
        index = i
        break
      }
      current = current.next as NodeInterface
      i++
    }
    return index
  }
  // 更新某个位置的链表元素
  public update(position:number, ele:any):boolean {
    let res = false
    if (this.isEle(ele)) {
      let current = this.get(position)
      if (current) {
        current.element = ele
        res = true
      }
    }
    return res
  }
  // 删除某个位置的元素
  public removeAt(position:number):any {
    let current = this.get(position)
    if (position === 0) {
      if (current.next) {
        current.element = current.next.element
        current.next = current.next.next
        this.size--
      }
    } else {
      if (current) {
        let previous = this.get(position - 1)
        previous.next = current.next
        this.size--
      }
    }
    return current && current.element 
  }
  // 删除某个元素
  public remove(ele:any):any {
    let position = this.indexOf(ele)
    return this.removeAt(position)
  }
  // 通过数组展示
  public display():Array<any> {
    let currObj = this.header,
        arr = [];
    while (currObj !== null) {
        arr.push(currObj.element);
        currObj = currObj.next as NodeInterface;
    }
    return arr;
  }
  
}

export default ListNode;

// // 测试代码
// let listNode = new ListNode()
// listNode.append("1")
// listNode.append("2")
// console.log(listNode.display())
// listNode.insert(2, null)
// listNode.insert(0, 0)
// console.log(listNode.display())
// listNode.insert(3, 3)
// console.log("55:" + listNode.display())
// console.log(listNode.update(0, "头部"))
// listNode.append([1, 2, 3])
// console.log(listNode.display())
// console.log(listNode.size)
// console.log(listNode.get(3))
// console.log(listNode.indexOf(0))
// // 删除位置元素
// console.log(listNode.removeAt(0))
// console.log(listNode.removeAt(1))
// console.log(listNode.removeAt(5))
// console.log(listNode.display())
// console.log(listNode.size)

// console.log(listNode.remove("e"))
// console.log(listNode.remove([1, 2, 3]))
// console.log(listNode.display())
// console.log(listNode.size)