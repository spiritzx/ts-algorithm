/*
 * @Descripttion: 三路快排,颜色分类
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-10 15:26:29
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-10 16:31:16
 */
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组
// 原地对它们进行排序
// 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

{
  const sortColor = function(nums: number[], target: number): number[] {
    let res = nums.concat([]);
    let j = -1, i = 0, k = res.length;
    while (i < k) {
      if (res[i] === target) {
        ++i;
      }
      else if (res[i] < target) {
        ++j;
        [res[i], res[j]] = [res[j], res[i]]
      }
      else {
        --k;
        [res[k], res[i]] = [res[i], res[k]];
      }
    }
    return res;
  }

  let res = sortColor([2, 0, 1, 0, 1, 2, 0, 1, 1, 0, 0, 0, 1], 1);
  console.log(res);
}
