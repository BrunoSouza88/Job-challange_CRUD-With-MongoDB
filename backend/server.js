require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app')


const port = Number(process.env.PORT);
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.88rnmeg.mongodb.net/`)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  // If you want to use a taskId autoincrement, uncomment the line below:
  // const connection = mongoose.createConnection(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.88rnmeg.mongodb.net/`);
  // autoIncrement.initialize(connection);
  
  // connection.on('open', () => {
  //   app.listen(port, () => {
  //     console.log(`Example app listening on port ${port}`);
  //   });
  // });
  
  // connection.on('error', (error) => {
  //   console.log(error);
  // });
  