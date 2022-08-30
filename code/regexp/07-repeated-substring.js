/**
 * @lc app=leetcode.cn id=459 lang=javascript
 * @description Repeated Substring Pattern
 * @author Heidi Codes
 */

/**
 * @param {string} s
 * @return {boolean}
 */

export default (str) => {
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
