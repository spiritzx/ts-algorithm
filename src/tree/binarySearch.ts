/*
 * @Descripttion: 二分搜索法
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-09 22:41:01
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-10 10:35:19
 */

// 二分搜索法
{
  const binarySearch = function (
    nums: number[],
    target: number
  ): number {
    // 确定好区间: target 在 [l...r] 中,前闭后闭区间
    let l = 0, r = nums.length - 1; 
    while (l < r) {
      let mid = Number(parseInt(`${(l + r) / 2}`)); // 确定好循环不变量
      if (nums[mid] === target) {
        return mid;
      }
      if (target <= nums[mid]) {
        r = mid;
      }
      else {
        l = mid + 1;
      }
    }
    return -1;
  }
  const res = binarySearch([1, 2, 3, 4, 5], 6);
  console.log(res);
}