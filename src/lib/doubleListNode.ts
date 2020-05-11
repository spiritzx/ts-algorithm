/*
 * @Descripttion: 链表
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-03 16:34:30
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-11 22:56:26
 */
interface doubleNodeInterface {
  element: any
  next: any
  previous:any
  setNext:Function
  setPrevious:Function
}
class DoubleNodeObj implements doubleNodeInterface {
  public element = "header"
  public next = null
  public previous = null
  public constructor(ele:any) {
    this.element = ele
  }
  public setPrevious(val:any) {
    this.previous = val
  }
  public setNext(val:any) {
    this.next = val
  }
}

interface doubleListNodeInterface {
  size:number // 链表数据长度
  header:doubleNodeInterface // 链表头部
  tail:doubleNodeInterface // 链表尾部
  append:Function // 添加链表元素
  forwardList:Function // 前序遍历
  backList:Function // 后序遍历
  insert:Function // 插入数据
  get:Function // 获取某个位置的元素
  indexOf:Function // 获取某个元素的位置
  update:Function // 更新某个位置上的元素
  removeAt:Function // 删除某个位置的元素
  remove:Function // 删除指定元素
}

class DoubleListNode implements doubleListNodeInterface  {
  public tail:doubleNodeInterface
  public header:doubleNodeInterface
  public constructor() {
    this.header = new DoubleNodeObj("header")
    this.tail = new DoubleNodeObj("tail")
    this.header.setNext(this.tail)
    this.tail.setPrevious(this.header)
  }
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
    let res = false
    if (this.isEle(ele)) {
      if (this.size === 1) {
        this.tail.element = ele
      } else {
        let nodeObj = new DoubleNodeObj(ele)
        let current:nodeInterface = this.header
        while (current.next !== null) {
          current = current.next
        }
        current.next = nodeObj
        nodeObj.setPrevious(current)
        this.tail = nodeObj
      }
      this.size++
      res = true
    }
    return res
  }
  // 插入
  public insert(position:number, ele:any):boolean {
    let res = false
    if (this.isEle(ele)) {
      let current = this.get(position)
      let newEle = new DoubleNodeObj(ele)
      // console.log("dd:" + current.element)
      if (current) {
        newEle.next = current.next
        newEle.previous = current
        current.setNext(newEle)
        if (position === this.size - 1) {
          this.tail = newEle
        }
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
      let current:doubleNodeInterface = this.header
      let index:number = 0
      while (index < position) {
        current = current.next
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
      if (typeof current.element === "object") {
        if (current.element.toString() === ele.toString()) {
          index = i
          break
        }
      } else {
        if (current.element === ele) {
          index = i
          break
        }
      }
      current = current.next
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
    if (this.size === 1 && current) {
      return false
    }
    if (position === 0) {
      this.header = current.next
      this.header.previous = null
      this.size--
    } else if (position === this.size - 1) {
      this.tail = current.previous
      this.tail.next = null
      this.size--
    } else {
      if (current) {
        let previous = current.previous
        previous.next = current.next
        if (current.next) {
          current.next.previous = previous
        }
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
  // 前序遍历展示
  public forwardList():Array<any> {
    let currObj = this.header,
        arr = [];
    while (currObj !== null) {
        arr.push(currObj.element);
        currObj = currObj.next;
    }
    return arr;
  }
  // 后序遍历展示
  public backList():Array<any> {
    let currObj = this.tail,
        arr = [];
    while (currObj !== null) {
        arr.push(currObj.element);
        currObj = currObj.previous;
    }
    return arr;
  }
}

/**
 * 测试代码 
 */

// 尾部插入
let double_listNode = new DoubleListNode()
double_listNode.append("1")
double_listNode.append("2")
console.log(double_listNode.forwardList())
console.log(double_listNode.header)
// 位置插入
// double_listNode.insert(0, 0)
double_listNode.insert(2, 3)
console.log(double_listNode.forwardList())
console.log(double_listNode.backList())
console.log(double_listNode.header)
console.log(double_listNode.size)
// 位置更新
console.log(double_listNode.update(0, "头部"))
console.log(double_listNode.forwardList())
console.log(double_listNode.size)
// 获取位置上的元素
console.log("下标值上的元素为:"+double_listNode.get(3).element)
// 获取元素的下标值
console.log("下标值:" + double_listNode.indexOf(3))

// // 删除位置元素
console.log(double_listNode.removeAt(3))
console.log(double_listNode.removeAt(2))
console.log(double_listNode.removeAt(1))
console.log(double_listNode.removeAt(0))
console.log("删除后:" + double_listNode.forwardList())
console.log(double_listNode.size)

// console.log("删除选定元素")
// console.log(double_listNode.remove("e"))
// console.log(double_listNode.remove(3))
// console.log(double_listNode.forwardList())
// console.log(double_listNode.size)

double_listNode.append("1")
double_listNode.append("2")
double_listNode.append("3")
console.log(double_listNode.forwardList())
console.log("后序遍历")
console.log(double_listNode.size)
console.log(double_listNode.backList())