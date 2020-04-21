/*
 * @Descripttion: 用数组模拟栈
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-20 22:16:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-21 22:11:35
 */
interface stackFace {
  push:Function // 添加元素
  pop:Function // 移除元素
  peek:Function // 返回栈顶元素
  isEmpty:Function // 栈是否为空
  clear:Function // 清空栈
  size:number // 栈的长度
}

class Stack implements stackFace {
  private stack = new Array()
  public push(val:any):void {
    // 放入栈底
    this.stack.push(val)
  }
  public pop():void {
    // 删除栈顶
    this.stack.shift()
  }
  public peek():any {
    // 返回栈顶元素
    return this.stack[0]
  }
  public isEmpty():boolean {
    return !!this.stack.length
  }
  public clear():void {
    this.stack = []
  }
  public size:number = this.stack.length
  public log():void {
    console.log(JSON.stringify(this.stack))
  }
}

let stack = new Stack()
stack.push("545")
stack.push("525")
stack.push("535")
stack.log()
console.log(stack.peek())