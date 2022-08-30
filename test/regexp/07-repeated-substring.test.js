/**
 * @description Repeated Substring Pattern
 * @author Heidi Codes
 */

import subLoopStr from '../../code/regexp/07-repeated-substring'

test('subLoopStr', () => {
  expect(subLoopStr('abab')).toBe(true)
})
test('subLoopStr:2', () => {
  expect(subLoopStr('abababc')).toBe(false)
})
