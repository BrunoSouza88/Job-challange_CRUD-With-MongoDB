require('dotenv').config();
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const app = require('./app');

const port = Number(process.env.PORT);
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connection = mongoose.createConnection(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.88rnmeg.mongodb.net/`);
autoIncrement.initialize(connection);

connection
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
