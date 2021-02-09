
/*
 * @Descripttion: 我的 Promise
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-02-06 14:28:15
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-02-08 20:55:16
 */

interface MyPromiseType {
  then: (fn1: () => void, fn2: () => void | undefined) => void;
}
type Exexcut = (resolve: MyPromise["resolve"], reject: MyPromise["reject"]) => void;
type CallBackType = (value: any) => any;
type CallBackObj = {
  success: CallBackType | undefined;
  fail: CallBackType | undefined
}

class MyPromise implements MyPromiseType {
  private state: string =  "pending";
  private value: any;
  private callBack: CallBackObj[] = [];
  private resolve(value: any) {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    this.value = value;
    this.callBack.forEach((val: CallBackObj) => {
      this.then(val.success, val.fail);
    });
  };
  private reject(value: any)  {
    if (this.state !== "pending") return;
    this.state = "rejected";
    this.value = value;
    this.callBack.forEach((val: CallBackObj) => {
      this.then(val.success, val.fail);
    });
  };
  constructor(exexcut: Exexcut) {
    exexcut(this.resolve.bind(this), this.reject.bind(this));
  }
  then(success?: (value: any) => any, fail?: ((value: any) => any)) {
    let that = this;
    if (success || fail) {
      if (that.state === "fulfilled" && success) {
        const res = success(that.value);
        if (res && res.constructor === MyPromise) {
          return res;
        } else {
          that.value = res;
        }
        
      } else if (that.state === "rejected" && fail) {
        that.state = "fulfilled";
        const res = fail(that.value);
        if (res && res.constructor === MyPromise) {
          return res;
        } else {
          that.value = res;
        }
      } else if (that.state === "pending") {
        let obj  = {
          success: success,
          fail: fail
        }
        that.callBack.push(obj);
      }
    }
    return that;
  }
}

// const prom = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000)
//   // rejects(2);
// }).then(res => {
//   return new Promise((resolve, rejects) => {resolve(res)});
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
  return new MyPromise(resolve => {
    resolve(20);
  })
}, err => {
  console.log(err);
  return "4";
})
.then(res => {
  console.log(4545);
  console.log(res);
})
// console.log("121");