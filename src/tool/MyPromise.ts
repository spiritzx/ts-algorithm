
/*
 * @Descripttion: 我的 Promise
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-06 14:28:15
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-09 00:57:47
 */

import { rejects } from "assert";

interface MyPromiseType {
  then: (fn1: () => void, fn2: () => void | undefined) => void;
  resolve: (value: any) => void;
}
type Exexcut = (resolve: MyPromise["resolve"], reject: MyPromise["reject"]) => void;
type CallBackType = () => any;

class MyPromise implements MyPromiseType {
  private state: string =  "pending";
  private value: any;
  private successArr: CallBackType[] = [];
  private failArr: CallBackType[] = [];
  private P2: MyPromiseType | undefined;
  resolve(value: any) {
    // debugger;
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    this.value = value;
    // console.log(this.successArr);
    this.successArr.forEach((callback) => {
      setTimeout(() => {
        // console.log(callback);
        let x = callback();
        // console.log(x);
        this.P2?.resolve(x);
      }, 0);
    });
  };
  private reject(value: any)  {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.value = value;
    this.failArr.forEach((callback) => {
      setTimeout(() => callback(), 0);
    });
  };
  constructor(exexcut: Exexcut) {
    exexcut(this.resolve.bind(this), this.reject.bind(this));
  }
  then(success?: (value: any) => any, fail?: ((value: any) => any)) {
    // console.log("当前状态:" + this.state);
    // console.log(success);
    success = success ? success : (value: any) => {return value};
    fail = fail ? fail : (value: any) => {return value};
    // debugger;
    let  that = this;
    const P = new MyPromise((resolve, reject) => {
      // console.log(that.state)
      if (that.state === "fulfilled") {
        setTimeout(() => {
          let x = success && success(that.value);
          resolve(x);
        }, 0)
      } else if (that.state === "rejected" ) {
        setTimeout(() => {
          let x = fail && fail(that.value)
          resolve(x);
        }, 0)
      } else if (that.state === "pending") {
        // console.log("走 pending");
        that.successArr.push(() => {
          return success && success(this.value)
        })
        that.failArr.push(() => {
          return fail && fail(this.value)
        })
      }
    })
    this.P2 = P;
    // console.log(P)
    return P;
  }
}

// const prom = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 3000)
//   // rejects(2);
// }).then(res => {
//   // return new Promise((resolve, rejects) => {resolve(res)});
//   setTimeout(() => {
//     return res;
//   }, 1000)
// }, err => {
//   console.log(err);
//   return err - 1
// }).then(res => {
//   console.log(res);
// })
// console.log(prom)

const my = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve(2);
  //   // reject("reject")
  // }, 2000)
  resolve(2);
  // reject("reject");
})
.then(res => {
  // return new MyPromise(resolve => {
  //   resolve(res);
  // })
  // console.log("第一次");
  // console.log(res);
  return res + 1;
}, err => {
  console.log(err);
  return "4";
})
// .then(() => {
//   return new MyPromise((resolve, rejects) => {
//     resolve(10);
//   }) 
// })
.then((res: any) => {
  console.log("第二次");
  console.log("end:" + res);
  return res + 10;
})
.then((res: any) => {
  console.log("第三次");
  console.log("end1:" + res);
})
console.log("121");