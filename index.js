const express = require('express')

const routes = require('./routes.js');
const errorHandler = require('./middleware/errorHandler');
const PORT = require('./config/config.js').PORT || 3000;

const app = express();

require('./config/mongoose');

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
