/**
 * @description Place Flowers
 * @author Heidi Codes
 */
import flower from '../../code/array/05-place-flowers'

test('flower:[1,0,0,0,1],1', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
})
test('flower:[1,0,0,0,1],2', () => {
  expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})
test('flower:[1, 0, 0, 0, 1, 0, 0], 2', () => {
  expect(flower([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true)
})
