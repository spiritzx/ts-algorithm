/*
 * @Descripttion: 用数组模拟栈
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-20 22:16:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-20 22:42:46
 */
interface stackFace {
  push:Function // 添加元素
  pop:Function // 移除元素
  peek:Function // 返回栈顶元素
  isEmpty:Function // 栈是否为空
  clear:Function // 清空栈
  size:Function // 栈的
}

class Stack implements stackFace {
  private static = new Array()
  public push(val:any):void {
    this.static.push(val)
  }
  public pop():void {
    this.static.shift()
  }
  public log():void {
    console.log(JSON.stringify(this.static))
  }
}

let stack = new Stack()
stack.push("545")
stack.push("525")
stack.push("535")
stack.log()