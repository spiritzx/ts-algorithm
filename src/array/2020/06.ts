/*
 * @Descripttion: 寻找两个正序数组的中位数
 * @Descripttion: 是指一组数据从小到大排列，位于中间的那个数。可以是一个（数据为奇数），也可以是2个的平均（数据为偶数）, 例如 [1,3, 8] 是 3, [1, 2, 3, 8] 是 2.5
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-06 21:53:44
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-07 21:38:43
 */
{
  var findMedianSortedArrays = function(nums1:number[], nums2:number[]): number {
    let avarage = 0;
    let totalNums = nums1.concat(nums2).sort((a, b) => a - b);
    if (totalNums.length % 2 === 1) {
      avarage = totalNums[(totalNums.length + 1) / 2 - 1]
    } else {
      avarage = (totalNums[(totalNums.length) / 2 - 1] + totalNums[(totalNums.length) / 2]) / 2
    }
    return  avarage;
  };
  console.log(findMedianSortedArrays([1,3], [2, 7]))
}
