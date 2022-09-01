/**
 * @lc app=leetcode.cn id=621 lang=javascript
 * @description Task Scheduler
 * @author Heidi Codes
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

export default (tasks, n) => {
  let q = []
  let len = tasks.length
  tasks = tasks
    .sort()
    .join('')
    .match(/(\w)\1+|\w/g)
    .sort((a, b) => b.length - a.length)
    .join('')
    .split('')
  while (len > 0) {
    if (!q.length) {
      q.push(tasks.shift())
      len--
    } else {
      let slice = q.slice(-n)
      let is = -1
      for (let i = 0, l = tasks.length; i < l; i++) {
        if (!slice.includes(tasks[i])) {
          q.push(tasks[i])
          is = i
          break
        }
      }
      if (is !== -1) {
        tasks.splice(is, 1)
        len--
      } else {
        q.push('-')
      }
    }
  }
  return q.length
}
