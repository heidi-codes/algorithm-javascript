/**
 * @description Select Sort
 * @author Heidi Codes
 */

import sort from '../../code/sort/10-select-sort'

test('Select Sort', () => {
  expect(sort([1, 9, 5, 3, 4])).toEqual([1, 3, 4, 5, 9])
})
