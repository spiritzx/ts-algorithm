/*
 * @Descripttion: 三数之和
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-18 21:41:12
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-18 21:53:14
 */

// 给你一个包含 n 个整数的数组 nums
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
// 请你找出所有和为 0 且不重复的三元组。
// 答案中不可以包含重复的三元组。
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

export const threeSum = function(nums: number[]) {
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

export const threeSumOne = function(nums: number[]) {
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

export const threeSumTwo = function(nums: number[]) {
  let res: number[][] = [];
  let len = nums.length;
  if (len <= 2) {
    return res;
  }
  let _nums = nums.sort();
  for (let i = 0; i < len - 2;) {
    let target = 0 - _nums[i];
    if ( _nums[i] > 0) {
      break;
    }
    if (_nums[i - 1] === _nums[i]) {
      i++;
    } else {
      let j = i + 1;
      let k = len - 1;
      while (j < k) {
        if (_nums[j] + _nums[k] > target) {
          k--;
        }
        if (_nums[j] + _nums[k] < target) {
          j++;
        }
        console.log(_nums[j])
        if (_nums[j] + _nums[k] === target) {
          while (_nums[j] === _nums[j - 1] && j < k) {
            j++;
          }
          while (_nums[k] === _nums[k - 1] && j < k) {
            k--;
          }
          if (j !== k) {
            res.push([_nums[i], _nums[j] , _nums[k]])
          }
        }
      }
      i++;
    }
  }
  return res;
};
