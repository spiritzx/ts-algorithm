/*
 * @Descripttion: 优先队列
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-01 10:55:02
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-02 23:00:24
 */
import Queue from "./queue-array"

interface PositionObj {
  name: any,
  code: number
}

class PriorQueue extends Queue {
  constructor() {
    super()
  }
  findPosition(obj:PositionObj):number {
    let len = this.queue.length
    let index = len
    // console.log(this.queue)
    this.queue.forEach((val, i) => {
      let _index = len - i - 1
      if (this.queue[_index].code < obj.code) {
        index = _index
      }
    })
    return index
  }
  insert(obj:PositionObj) {
    if (this.queue.length === 0) {
      this.queue.push(obj)
    } else {
      let index = this.findPosition(obj)
      this.queue.splice(index, 0, obj)
    }
  }
}

// 测试代码
let priorQueue:PriorQueue = new PriorQueue()
let step1 = {
  name: 'tom',
  code: 10
}
let step2 = {
  name: 'tom',
  code: 9
}
let step3 = {
  name: 'tom',
  code: 11
}
let step4 = {
  name: 'tom',
  code: 12
}
let step5 = {
  name: 'tom',
  code: 1
}
priorQueue.insert(step1)
priorQueue.insert(step2)
priorQueue.insert(step3)
priorQueue.insert(step4)
priorQueue.insert(step5)
console.log(priorQueue.log())


export default PriorQueue
