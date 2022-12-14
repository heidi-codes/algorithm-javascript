/**
 * @lc app=leetcode.cn id=605 lang=javascript
 * @description Place Flowers
 * @author Heidi Codes
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

export default (arr, n) => {
  let max = 0
  arr.push(0)
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] === 0) {
      if (i === 0 && arr[1] === 0) {
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
      }
    }
  }
  return max >= n
}
