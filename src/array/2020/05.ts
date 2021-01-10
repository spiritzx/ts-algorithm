/*
 * @Descripttion: 两数之和
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-05 21:06:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-05 22:18:46
 */

{
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

  

  function twoSumTwo(nums:number[], target:number): number[] {
    let hash =getHash(nums);
    let res: number[] = [];
    let j = null;
    nums.forEach((val, i) => {
      j = target - val;
      let index = hash[j];
      if (index) {
        res = [index, i];
      }
    })
    return res;
  }
  console.log(twoSumTwo([1, 2, 3, 4], 6))
}