/**
 * @lc app=leetcode.cn id=557 lang=javascript
 * @description Reverse Words in a String
 * @author Heidi Codes
 */

// /**
//  * Basic
//  * @param {string} s
//  * @return {string}
//  */
// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map((item) => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

/**
 * More Elegant
 * @param {string} s
 * @return {string}
 */
export default (str) => {
  return str
    .split(' ')
    .map((item) => {
      return item.split('').reverse().join('')
    })
    .join(' ')
}
