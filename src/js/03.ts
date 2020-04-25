/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-04-25 11:23:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-04-25 11:25:18
 */
import Queue from "../lib/queue-array"
let queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.log())
queue.pop()
console.log(queue.log())