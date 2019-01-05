const LinkedList = require('./doubly-linked-list');

describe('Linked List', () => {
  const list = new LinkedList();
  test('Add to an Empty LinkedList', () => {
    list.add('A');
    expect(list.head.val).toBe('A');
    expect(list.tail).toEqual(list.head);
  });
  test('Add a second node to LinkedList', () => {
    list.add('B');
    expect(list.head.val).toBe('A');
    expect(list.tail.val).toBe('B');
    expect(list.tail).not.toEqual(list.head);
  });
  test('Remove a tail node from LinkedList', () => {
    list.remove('B');
    expect(list.head.val).toBe('A');
    expect(list.tail.val).toBe('A');
    expect(list.tail).toEqual(list.head);
  });
  test('Remove a head node from LinkedList', () => {
    list.add('B');
    list.remove('A');
    expect(list.head.val).toBe('B');
    expect(list.tail.val).toBe('B');
    expect(list.tail).toEqual(list.head);
  });
  test('Attemp to remove an undefined value from LinkedList', () => {
    list.remove('Z');
    expect(list.head.val).toBe('B');
    expect(list.tail.val).toBe('B');
    expect(list.tail).toEqual(list.head);
  });
  test('Remove last node from LinkedList', () => {
    list.remove('B');
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});
