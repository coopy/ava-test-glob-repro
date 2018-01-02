var glob = require("glob")

glob("src/**/*.test.js", function (err, files) {
  if (err) {
    return console.error(err);
  }
  console.log('FOUND FILES:');
  console.log(files.join('\n'));
})