
/*
 * @Descripttion: 用数组模拟栈
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-20 22:16:40
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-13 21:48:28
 */
interface queueInterface {
  push:Function // 添加元素
  pop:Function // 移除元素
  peek:Function // 返回队列前端
  isEmpty:Function // 队是否为空
  clear:Function // 清空队列
  size:Function // 队列的长度 
}

class Queue implements queueInterface {
  protected queue = new Array()
  public push(val:any):void {
    // 放入队列末尾
    this.queue.push(val)
  }
  public pop():any {
    // 删除并返回队列前端
    return this.queue.shift()
  }
  public peek():any {
    // 返回栈顶元素
    return this.queue[0]
  }
  public isEmpty():boolean {
    return !this.queue.length
  }
  public clear():void {
    this.queue = []
  }
  public size():number {
    return this.queue.length
  }
  public log():string {
    return JSON.stringify(this.queue)
  }
}

export default Queue