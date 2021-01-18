/*
 * @Descripttion: 两数之和
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-05 21:06:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-18 22:48:00
 */

  /**
   * 生成哈希表
   * @param {number[]} nums
   * @return {object}
   */
  function getHash(nums: number[]) {
    let res = {};
    nums.forEach((val, i) => {
      res[val] = i;
    })
    return res;
  }
  
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  function twoSumOne(nums:number[], target:number): number[] {
    let res: number[] = [];
    let j = null;
    nums.forEach((val, i) => {
      j = target - val;
      let index = nums.indexOf(j);
      if (index > 0 && index !== i) {
        res = [index, i];
      }
    })
    return res;
  }

  

exports.twoSumTwo = (nums:number[], target:number): number[] => {
  let hash = getHash(nums); // 找一个本子将所有人记住
  let res: number[] = [];
  let j = null;
  nums.forEach((val, i) => {
    j = target - val;
    let index = hash[j]; // 然后喊名字
    if (index) {
      res = [index, i];
    }
  })
  return res;
}

exports.twoSumThree = (nums:number[], target:number): number[] => {
  let hash = {}; // 找一个本子
  let res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let second = target - nums[i];
    if (hash[second] !== undefined) {
      // 本子上有名字, 直接返回
      res = [hash[second], i]
      return res;
    } else {
      // 没有名字,就记录下已经自己的,等着别人来找你
      hash[nums[i]] = i
    }
  }
  return res;
}
