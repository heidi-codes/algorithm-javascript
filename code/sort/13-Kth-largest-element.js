/**
 * @lc app=leetcode.cn id=215 lang=javascript
 * @description Kth Largest Element in an Array
 * @author Heidi Codes
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export default (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  // arr[len+1-k]
  return arr[len - (k - 1)]
}
