/**
 * @lc app=leetcode.cn id=30 lang=javascript
 * @description Substring with Concatenation of All Words
 * @author Heidi Codes
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

export default (str, words) => {
  let result = []
  let num = words.length
  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  return result
    .map((item) => {
      return str.indexOf(item.join(''))
    })
    .filter((item) => item !== -1)
    .sort()
}
