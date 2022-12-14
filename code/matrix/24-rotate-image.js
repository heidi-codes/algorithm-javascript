/**
 * @lc app=leetcode.cn id=48 lang=javascript
 * @description Rotate Image
 * @author Heidi Codes
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

export default (arr) => {
  let vecor = arr.length
  for (let i = 0, len = vecor / 2; i < len; i++) {
    for (let j = 0, tmp; j < vecor; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[vecor - i - 1][j]
      arr[vecor - i - 1][j] = tmp
    }
  }
  for (let i = 0; i < vecor; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = arr[i][j]
      arr[i][j] = arr[j][i]
      arr[j][i] = tmp
    }
  }
  return arr
}
