
let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
  }

let cors = require('cors');

export {cors, corsOptions}
