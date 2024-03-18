const fs = require('fs');
const path = require('path');

// //Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;

//   console.log('Folder created...');
// });

// Create a file on test folder
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  (err) => {
    if (err) throw err;

    console.log('Create hello.txt file...');
  }
);

// Append to file
fs.appendFile(
  path.join(__dirname, '/test', 'hello.txt'),
  ' Angie here, learning Node.js!',
  (err) => {
    if (err) throw err;
    console.log('File modified...');
  }
);

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
