import { Node, Stack } from '../../../src/data-structures/stacks/index';

describe('src/data-structures/stacks/index.js', () => {
  it('Verifies attributes of default Node instance', () => {
    const node = new Node(3948);
    expect(node.value)
      .toEqual(3948);
    expect(node.next)
      .toEqual(null);
  });
  it('Verifies attribute of default Stack Instance', () => {
    const stack = new Stack();
    expect(stack.size)
      .toEqual(0);
    expect(stack.first)
      .toEqual(null);
    expect(stack.last)
      .toEqual(null);
  });
  it('Verifies functionality of methods for Stack instances', () => {
    const stack = new Stack();
    stack.push(348);
    stack.push('Keeling Curve');
    stack.push('30 by 30');
    expect(stack.size)
      .toEqual(3);

    const popResponse = stack.pop();
    expect(popResponse)
      .toEqual('30 by 30');
    expect(stack.size).toEqual(2);
  });
  it('Verifies null response of pop method when no values present in stack', () => {
    const stack = new Stack();
    const response = stack.pop();

    expect(response)
      .toEqual(null);
  });
  it('Verifies response of pop method when 1 value is present in the stack', () => {
    const stack = new Stack();
    stack.push('Blue carbon');
    expect(stack.first.value)
      .toEqual('Blue carbon');
    expect(stack.last.value)
      .toEqual('Blue carbon');
    stack.pop();

    expect(stack.first)
      .toEqual(null);
    expect(stack.last)
      .toEqual(null);
  });
});
