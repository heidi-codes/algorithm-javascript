/**
 * @lc app=leetcode.cn id=696 lang=javascript
 * @description Count Binary Substrings
 * @author Heidi Codes
 */

/**
 * @param {string} s
 * @return {number}
 */

export default (str) => {
  let r = []
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}
