const server = require('./api/server.js');
require('dotenv').config()

const PORT = process.env.PORT || 3232;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
