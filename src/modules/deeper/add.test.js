const test = require('ava').test;
const add = require('./add');

test('should add two numbers', t => {
  t.is(add(1, 5), 6);
});