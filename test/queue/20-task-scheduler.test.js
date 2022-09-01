/**
 * @description Task Scheduler
 * @author Heidi Codes
 */

import cpu from '../../code/queue/20-task-scheduler'

test('cpu:1', () => {
  let tasks = ['A', 'A', 'A', 'B', 'B', 'B']
  let n = 2
  expect(cpu(tasks, n)).toBe(8)
})
