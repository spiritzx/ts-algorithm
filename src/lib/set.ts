/*
 * @Descripttion: set 结构扩展
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-14 19:42:04
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-15 22:28:25
 */
interface set{
  set:Set<any>
  add:Function // 给set增加元素
  has:Function // 判断set是否有元素
  delete:Function // 删除元素
  clear:Function // 清空元素
  union:Function // 求并集
  intersectionSet:Function // 求交集
  defferenceSet:Function // 求差集
  subSet:Function
}

class SetPack implements set {
  constructor(arr:Array<any>) {
    this.set = new Set(arr)
  }
  public set = new Set()
  public add(val:any) {
    this.set.add(val)
  }
  public has(val:any):boolean {
    return this.set.has(val)
  }
  public delete(val:any) {
    this.set.delete(val)
  }
  public clear() {
    this.set.clear()
  }
  public union(arr:Set<any>):Array<any> {
    let res:any[] = []
    res =  Array.from(this.set)
    for (const key of arr) {
      if (!this.set.has(key)) {
        res.push(key)
      }
    }
    return res
  }
  public intersectionSet(arr:Set<any>):Array<any> {
    let res:any[] = []
    for (const key of arr) {
      if (this.set.has(key)) {
        res.push(key)
      }
    }
    return res
  }
  public defferenceSet(arr:Set<any>):Array<any> {
    let res:any[] = []
    for (const key of this.set) {
      if (!arr.has(key)) {
        res.push(key)
      }
    }
    for (const key of arr) {
      if (!this.set.has(key)) {
        res.push(key)
      }
    }
    return res
  }
  public subSet(arr:Set<any>):Boolean {
    let res = true
    if (this.set.size < arr.size) {
      return res = false
    }
    for (const key of arr) {
      if (!this.set.has(key)) {
        res = false
      }
    }
    return res
  }
}


/*
  * 测试代码
 */
let set = new SetPack([1, 2, 3, [1, 23]])
set.add(4)
set.add(5)
console.log(set.has([1, 23]))
// 并集
let unionRes = set.union(new Set([3, 4, 5, 6, 7, [1, 23]]))
console.log(unionRes)

// 交集
let intersectionSet = set.intersectionSet(new Set([3, 4, 5, 6, 7, [1, 23]]))
console.log(intersectionSet)

// 求差值
let interpolationSet = set.defferenceSet(new Set([3, 4, 5, 6, 7, [1, 23]]))
console.log(interpolationSet)
// 求差值
let isSub = set.subSet(new Set([3, 4, 5, 6]))
console.log(isSub)
