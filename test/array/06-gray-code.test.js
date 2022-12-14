/**
 * @description Gray Codes
 * @author Heidi Codes
 */

import grayCode from '../../code/array/06-gray-code'

test('grayCode:1', () => {
  expect(grayCode(2)).toEqual(['00', '01', '11', '10'])
})
test('grayCode:2', () => {
  expect(grayCode(3)).toEqual([
    '000',
    '001',
    '011',
    '010',
    '110',
    '111',
    '101',
    '100'
  ])
})
