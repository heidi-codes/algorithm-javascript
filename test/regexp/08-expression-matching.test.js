/**
 * @description Regular Expression Matching
 * @author Heidi Codes
 */

import regModeStr from '../../code/regexp/08-expression-matching'

test('regModeStr', () => {
  expect(regModeStr('aa', 'a')).toBe(false)
  expect(regModeStr('aa', 'a*')).toBe(true)
  expect(regModeStr('ab', '.*')).toBe(true)
  expect(regModeStr('aab', 'c*a*b')).toBe(true)
  expect(regModeStr('mississippi', 'mis*is*p*.')).toBe(false)
})
