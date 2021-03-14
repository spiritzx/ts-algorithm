/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-14 12:53:23
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 13:54:32
 */
/* 
  * 最长回文子字符串
 */
function isPalindrome(str: string) {
  const leng = str.length;
  if (leng === 1) return false;
  let i = 0;
  let j = leng - 1;
  let res = true; 
  while (i <= parseInt(`${leng / 2}`)) {
    if (str[i] !== str[j - i]) {
      res = false;
      break;
    }
    i++;
  }
  return res;
}
export function longestPalindrome(s:string) {
  let res = s[0];
  let size = 1;
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      temp = temp + s[j];
      if (isPalindrome(temp)) {
        if (temp.length > size) {
          res = temp;
          size = temp.length;
          if (size + i === s.length) {
            return res;
          }
        }
      }
      if (temp.length + i >= s.length) {
        temp = "";
      }
    } 
  }
  return res;
}