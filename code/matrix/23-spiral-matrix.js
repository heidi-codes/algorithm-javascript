/**
 * @lc app=leetcode.cn id=54 lang=javascript
 * @description Spiral Matrix
 * @author Heidi Codes
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

export default (arr) => {
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        if (arr[i].length) {
          r.push(arr[i].pop())
        }
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length) {
        r.push(arr[i].shift())
      }
    }
    if (arr.length) {
      return map(arr, r)
    } else {
      return r
    }
  }
  return map(arr, [])
}
