const express = require('express');
const mongodb = require('./db/connect');
const routes = require('./routes/index');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes);

// only listen if mongodb connected successfully
mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });