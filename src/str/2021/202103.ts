/*
 * @Descripttion: 电话号码的字母组合
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-03-21 13:15:21
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-03-21 19:17:21
 */
/*
  * 电话号码的组合
  * 1: "", 2: "abc",3: "def",4: "ghi",5: "jkl",6: "mno",7: "pqrs",8: "tuv",9: "wxyz"
  * 输入23: [ad],[ad],[af],[bd],[be],[bf],[cd],[ce],[cf]
  *                        a
  *                    d   e   f
  *               
  *                 ad    ae     af
 */ 

function letterCombinationsHandle
  (digits:string, index:number, memo:Object, s:string, res: string[]){
    // console.log(index);
  index++;
  if (digits.length <= index) {
    res.push(s);
    return;
  }
  let str = memo[digits[index]];
  for (let i = 0; i < str.length; i ++) {
    letterCombinationsHandle(digits, index, memo, s += str[i], res);
    s = s.slice(0, s.length - 1);
  }
  return;
}

export function letterCombinations(digits: string) {
  let obj = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  let s = "";
  let res:string[] = []
  if (!digits.length) return res;
  letterCombinationsHandle(digits, -1, obj, s, res);
  return res;
}