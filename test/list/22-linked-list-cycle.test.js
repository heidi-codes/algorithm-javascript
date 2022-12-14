/**
 * @description  Linked List Cycle
 * @author Heidi Codes
 */

import isCircle, { NodeList } from '../../code/list/22-linked-list-cycle'

test('isCircle:1', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  head.next.next.next.next.next.next = head.next
  expect(isCircle(head)).toBe(true)
})
test('isCircle:2', () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9])
  expect(isCircle(head)).toBe(false)
})
