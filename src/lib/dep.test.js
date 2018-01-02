const test = require('ava').test;
const dep = require('./dep');

test('should return configuration', t => {
  t.deepEqual(dep(), {
    configuration: {
      some: 'stuff'
    }
  });
});