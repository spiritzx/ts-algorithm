/*
 * @Descripttion: Map结构
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-17 15:50:38
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-17 19:39:13
 */ 
let map:Map<any, any> = new Map()

let obj = {
  a: 1
}
let obj1 = {
  a: 2
}
map.set(obj, 1)
map.set(obj1, 2)
map.set("name", "zx")
map.set("sex", "男")
console.log(map)
console.log(map.get(obj))

console.log(map.has("name"))
console.log(map.has("男"))
console.log(map.size)
console.log(Array.from(map))

let map2 = new Map(map)

console.log("map2:")
console.log(map2)
console.log("map2 = map: " + (map2 == map) )

map.delete("name")
map.delete("男")
map.clear()
console.log(map)