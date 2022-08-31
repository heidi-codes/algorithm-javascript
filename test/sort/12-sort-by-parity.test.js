/**
 * @description Sort Array By Parity II
 * @author Heidi Codes
 */

import sort from '../../code/sort/12-sort-by-parity'

test('oddSort', () => {
  expect(sort([4, 2, 5, 7, 1, 6])).toEqual([2, 1, 4, 5, 6, 7])
})
