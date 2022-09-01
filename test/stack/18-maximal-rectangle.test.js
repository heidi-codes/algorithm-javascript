/**
 * @description Maximal Rectangle
 * @author Heidi Codes
 */

import rectangle from '../../code/stack/18-maximal-rectangle'

test('rectangle', () => {
  let input = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]
  expect(rectangle(input)).toBe(6)
})
test('rectangle2', () => {
  let input = [
    ['1', '0', '1', '0', '0', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '0', '1', '1', '1'],
    ['1', '0', '1', '0', '1', '0'],
    ['1', '0', '1', '1', '1', '1']
  ]
  expect(rectangle(input)).toBe(6)
})
test('rectangle3', () => {
  let input = [
    ['1', '1', '1', '0', '0', '0'],
    ['1', '1', '1', '0', '0', '0'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '0', '0', '0']
  ]
  expect(rectangle(input)).toBe(15)
})

test('rectangle4', () => {
  let input = [
    ['1', '1', '0', '0', '0', '0'],
    ['1', '1', '0', '0', '0', '0'],
    ['1', '1', '0', '1', '1', '1'],
    ['1', '1', '0', '1', '1', '1'],
    ['1', '1', '0', '0', '0', '0']
  ]
  expect(rectangle(input)).toBe(10)
})
