import express from 'express';
import db from './db/connection';
import getAllLocations from './controller';
var bodyParser = require("body-parser");

// Set up the express app
const app = express();
// get all todos
app.get('/locations', (req, res) => {

  getAllLocations(result => {
    res.status(200).send(Object.values(result))

  });


});

const PORT = 8000;

// db.connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
