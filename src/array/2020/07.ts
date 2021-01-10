/*
 * @Descripttion: 花钱最优解
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-07 22:03:47
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-07 22:25:10
 */

// 有一组面额钞票, [1, 2, 5, 10, 50, 100], 每一类型钞票若干,怎样在买东西时出动的钞票数目越少.
// 例如买 83 圆的东西,最优解时 1张50, 3张10, 1张2, 1张1, 总共出 6 张

{
  function getPayNum(price: number): number {
    let res = 0;
    let devPrice = price;
    const amountNums = [100, 50, 20, 10, 5, 2, 1];
    amountNums.forEach(val => {
      if (devPrice > 0) {
        let num = Number(parseInt(`${devPrice / val}`));
        res += num
        devPrice = devPrice - (val * num);
      }
    }) 
    return res;
  }
  console.log(getPayNum(83));
}

