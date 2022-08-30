/**
 * @lc app=leetcode.cn id=914 lang=javascript
 * @description X of a Kind in a Deck of Cards
 * @author Heidi Codes
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */

export default (arr) => {
  let group = []
  let tmp = {}
  arr.forEach((item) => {
    tmp[item] = tmp[item] ? tmp[item] + 1 : 1
  })
  for (let v of Object.values(tmp)) {
    group.push(v)
  }
  // The array is traversed only once, avoiding the time-consuming sorting and regularization.
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift()
    let b = group.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
}
