/**
 * @lc app=leetcode.cn id=93 lang=javascript
 * @description Restore IP Addresses
 * @author Heidi Codes
 */

/**
 * @param {string} s
 * @return {string[]}
 */

export default (str) => {
  let r = []
  let search = (cur, sub) => {
    if (sub.length > 12) {
      return
    }
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp - 256 < 0) {
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return r
}
