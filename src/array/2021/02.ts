/*
 * @Descripttion: 对撞双指针
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-10 20:52:57
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-10 21:30:34
 */


{
  var isPalindrome = function (x:number): boolean {
    let res = true;
    let str = `${x}`;
    let i = 0, j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      ++i;
      --j;
    }
    return res;
  };
  console.log(isPalindrome(33121233));
}