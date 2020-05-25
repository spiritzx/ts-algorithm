/*
 * @Descripttion: 哈希表
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-18 21:52:21
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-25 22:25:14
 */ 

interface hashTable {
  storage:Array<any>
  count:number
  limit:number
  add:Function // 插入和修改
  get:Function // 获取
  delete:Function
}
class HashTable implements hashTable {
  public storage = [] as Array<any> 
  public count = 0 
  public limit = 0
  private loadFactor:number = 0.75 
  constructor(limit:number = 7) {
    this.limit = limit
    this.storage = new Array(limit)
  }
  private getHashKey(key:string, prime:number):number {
    const H = 37;
    let total:number = 0;
    for (var i = 0; i < key.length; i++) {
      total +=  H * total + key.charCodeAt(i);
    }
    total = total % prime;
    if(total < 0 ){
      total += prime - 1;
    }
    return parseInt(total + "");
  }
  private getTupleIndex(bucket:Array<any>, key:string):number {
    let index:number = -1
    bucket.forEach((val, i) => {
      if (val[0] === key) {
        index = i
      }
    })
    return index
  }
  public add(key:string, value:any) {
    let index:number = this.getHashKey(key, this.limit)
    let bucket:Array<any> = this.storage[index] || []
    this.storage[index] = bucket
    let isUpdate:boolean = false
    bucket.forEach(val => {
      if (val[0] === key) {
        console.log(355)
        val[1] = value
        isUpdate = true
      }
    })
    if (!isUpdate) {
      bucket.push([key, value])
      this.count += 1
      if (this.count > this.limit * this.loadFactor) {
        this.resize(this.getPrimeNumber(this.limit * 2))
      }
    }
  }
  public get(key:string):void {
    let index:number = this.getHashKey(key, this.limit)
    let bucket:Array<any> = this.storage[index] || []
    let res:undefined = undefined
    if (bucket.length) {
      let tupleIndex:number = this.getTupleIndex(bucket, key)
      if (tupleIndex >= 0) {
        return bucket[tupleIndex][1]
      }
    }
    return res
  }
  public delete(key:string):void|Array<any> {
    let index:number = this.getHashKey(key, this.limit)
    let bucket:Array<any> = this.storage[index] || []
    let res:undefined|Array<any> = undefined
    if (bucket.length) {
      let tupleIndex:number = this.getTupleIndex(bucket, key)
      if (tupleIndex >= 0) {
        this.count--
        res = bucket.splice(tupleIndex, 1)[0]
        if (this.count < this.limit * (1 - this.loadFactor)) {
          let _limit = this.limit / 2 <= 7 ? 7 : this.limit / 2
          this.resize(this.getPrimeNumber(_limit))
        }
        return res
      }
    }
    return res
  }
  private resize(limit:number) {
    this.limit = limit
    this.count = 0
    let newStorage:Array<any> = new Array(limit)
    let oldStorage:Array<any> = this.storage
    this.storage = newStorage
    oldStorage.forEach(element => {
      if (element && element.length) {
        element.forEach((val:Array<any>) => {
          this.add(val[0], val[1])
        });
      }
    });
  }
  private getPrimeNumber(limit:number):number {
    let num = parseInt(limit + "")
    while (!this.checkPrimeFn(num)) {
      num++
    }
    console.log(num)
    return num
  }
  private checkPrimeFn(n:number):boolean {
    if (n == 0 || n == 1){
      return false;
    }
    if ( n == 2 ){
        return true;
    }
    let sum:number = 1
    for(var i:number = 2; i <= Math.sqrt(n); i += sum){
      if (n % i == 0) {
          return false;
      }
      if (i > 2) {
        sum = 2
      }
    }
    return true;
  }
}

let hashTable = new HashTable()
hashTable.add("a", "1")
hashTable.add("a", "01")
hashTable.add("b", "02")
console.log(hashTable.storage)

let value = hashTable.get("a")
let value1 = hashTable.get("c")
console.log(value)
console.log(value1)

console.log(hashTable.count)
let value2 = hashTable.delete("c")
let value3 = hashTable.delete("b")
console.log(value2)
console.log(value3)

console.log(hashTable.storage)
console.log(hashTable.count)

let arr = [
  {
    key: "c",
    value: "3"
  },
  {
    key: "d",
    value: "4"
  },
  {
    key: "e",
    value: "5"
  },
  {
    key: "f",
    value: "6"
  },
  {
    key: "g",
    value: "7"
  },
]
arr.forEach(val => {
  hashTable.add(val.key, val.value)
})
console.log(hashTable.storage)
console.log(hashTable.limit)
console.log(hashTable.count)
console.log(hashTable.get("d"))


// 删除缩容
hashTable.delete("c")
hashTable.delete("d")
hashTable.delete("a")
let deleteres = hashTable.delete("b")
let deleteres1 = hashTable.delete("f")
let deleteres2 = hashTable.delete("g")
console.log("结果:" + deleteres)

console.log(hashTable.storage)
console.log(hashTable.limit)
console.log(hashTable.count)
console.log(hashTable.get("d"))