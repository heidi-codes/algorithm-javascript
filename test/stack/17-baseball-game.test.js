/**
 * @description Baseball Game
 * @author Heidi Codes
 */

import baseball from '../../code/stack/17-baseball-game'

test('baseball', () => {
  expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
})
test('baseball:2', () => {
  expect(baseball(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
