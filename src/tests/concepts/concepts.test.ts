import { concepts } from '../../codes/concepts/concepts';
​
describe('Concepts Tests', () => {
  test('Sum of two numbers Test', () => {
    expect(concepts.sum()).toBe(0);
    expect(concepts.sum(1, 2)).toBe(3);
  });
  ​
})
