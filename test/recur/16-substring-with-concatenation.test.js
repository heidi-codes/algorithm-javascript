/**
 * @description Substring with Concatenation of All Words
 * @author Heidi Codes
 */

import words from '../../code/recur/16-substring-with-concatenation'
test('words', () => {
  expect(words('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})
test('words:2', () => {
  expect(
    words('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
  ).toEqual([])
})
