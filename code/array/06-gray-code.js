/**
 * @lc app=leetcode.cn id=89 lang=javascript
 * @description Gray Codes
 * @author Heidi Codes
 */

/**
 * @param {number} n
 * @return {number[]}
 */

export default (n) => {
  let make = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      let result = []
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }

      return result
    }
  }
  return make(n)
}
