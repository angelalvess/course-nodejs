// const { Person } = require('./person.js');
const dotenv = require('dotenv');
const connect = require('./src/database/connect');

dotenv.config();

connect();
require('./modules/express.js');

// require('./modules/path.js');
// require('./modules/fs.js');
// require('./modules/http.js');
