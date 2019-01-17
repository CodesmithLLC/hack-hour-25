const { Node, hasCycle } = require('./linked-list-cycle');


describe('Link List Cycle', () => {
  const node1 = new Node('1');
  const node2 = new Node('2');
  const node3 = new Node('3');
  const node4 = new Node('4');
  const node5 = new Node('5');

  test('Test #1 - empty list', () => {
    expect(hasCycle()).toBe(false);
  });

  test('Test #2 - non cyclical list', () => {
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    expect(hasCycle(node1)).toBe(false);
  });

  test('Test #3 - cyclical list', () => {
    node5.next = node2;
    expect(hasCycle(node1)).toBe(true);
  });
});
