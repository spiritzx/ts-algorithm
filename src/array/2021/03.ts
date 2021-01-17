/*
 * @Descripttion: leetcode: [11] 盛最多水的容器
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-17 16:34:52
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-17 17:32:29
 */


// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 输入：height = [4,3,2,1,4]
// 输出：16 [(4 - 0) * 4)

exports.maxArea = function(height: number[]): number {
  let res = 0;
  let i = 0;
   let len = height.length;
  for (; i < len - 1; i++ ) {
    for (let j = i + 1; j< len; j++ ) {
      console.log(i, j)
      res = Math.max(res, (j - i)* Math.min(height[i], height[j]))
    }
  }
  return res;
 };