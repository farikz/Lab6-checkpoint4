console.log("Hello, GitHub Actions!");
const { test, expect } = require('@jest/globals');

test('example test', () => {
  expect(1 + 1).toBe(2);
});
