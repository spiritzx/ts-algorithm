/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-05-25 21:10:06
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-05-25 21:52:32
 */ 
function primeFn(num:number) {
  for (let i:number = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// console.log(primeFn(7))
// console.log(primeFn(6))
// console.log(primeFn(5))
console.log(primeFn(4008))
console.log(primeFn(4007))

function checkPrimeFn(n:number) {
  if (n == 0 || n == 1){
    return false;
  }
  if ( n == 2 ){
      return true;
  }
  let sum = 1
  for(var i = 2; i <= Math.sqrt(n); i += sum){
    if (n % i == 0) {
        return false;
    }
    if (i > 2) {
      sum = 2
    }
  }
  return true;
}
console.log("7" + checkPrimeFn(7))
console.log("6" + checkPrimeFn(6))
console.log("3" + checkPrimeFn(3))
console.log("4" + checkPrimeFn(4))
console.log("17" + checkPrimeFn(17))
console.log("4007" + checkPrimeFn(4007))
console.log("4008" + checkPrimeFn(4008))
console.log("65011" + checkPrimeFn(65011))