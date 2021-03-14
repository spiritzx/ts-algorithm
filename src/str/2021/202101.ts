/*
 * @Descripttion: 滑动窗口算法
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-11 21:55:48
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-14 10:24:48
 */

//  没有重复字符的子字符的最大长度：给一个字符串，获得没有重复字符的最长子字符的长度
// abcabcbb 为 abc 所以长度为 3

export const lengthOfLongertSubString = function(str: string): number {
  let res = 0;
  let len = str.length;
  let l = 0, r = -1; // 区间 [l, ..., r];
  let obj = {};
  while (r < len) { // 停止条件,右边指针滑动到最右方
    r++;
    res = Math.max(res, r - l);
    if (obj[str[r]] !== undefined) {
      r = obj[str[r]];
      l = r + 1;
      obj = {};
    } else {
      obj[str[r]] = r;
    }
    
  }
  return res;
}