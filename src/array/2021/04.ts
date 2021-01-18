/*
 * @Descripttion: 三数之和
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 21:41:12
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-18 23:13:00
 */

// 给你一个包含 n 个整数的数组 nums
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。
// 答案中不可以包含重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

exports.threeSum = function(nums: number[]) {
  let res: number[][] = [];
  let len = nums.length;
  if (len <= 2) {
    return res;
  }
  let _nums = nums.sort();
  
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j ++) {
      for (let k = j + 1; k < len; k++) {
        if(_nums[i] + _nums[k] + _nums[j] === 0 && _nums[i] !== _nums[i - 1]) {
          res.push([_nums[i], _nums[j], _nums[k]]);
        }
      }
    }
  }
  console.log(res);
  return res;
};

exports.threeSumOne = function(nums: number[]) {
  let res: number[][] = [];
  let len = nums.length;
  if (len <= 2) {
    return res;
  }
  let _nums = nums.sort();
  
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j ++) {
      for (let k = j + 1; k < len; k++) {
        if(_nums[i] + _nums[k] + _nums[j] === 0 && _nums[i] !== _nums[i - 1]) {
          res.push([_nums[i], _nums[j], _nums[k]]);
        }
      }
    }
  }
  console.log(res);
  return res;
};