# Issue with Globbing in AVA

## Running with defaults

`$ ava --verbose`

```
  ✔ lib › dep › should return configuration
  ✔ modules › deeper › add › should add two numbers

  2 tests passed
```

## Running with file pattern

`$ ava src/**/*.test.js --verbose`

```
  ✔ should return configuration

  1 test passed
```

## Sanity check with `node-glob`

`glob.js`
```javascript
var glob = require("glob")

glob("src/**/*.test.js", function (err, files) {
  if (err) {
    return console.error(err);
  }
  console.log('FOUND FILES:');
  console.log(files.join('\n'));
})
```

`$ node glob.js`
```
FOUND FILES:
src/lib/dep.test.js
src/modules/deeper/add.test.js
```
