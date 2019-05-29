const express = require('express')
const db = require('./db/connection');
const getAllLocations = require('./controller');

var bodyParser = require("body-parser");
// written in es105
// Set up the express app 2
const app = express();
// get all todos
app.get('/locations', (req, res) => {

  getAllLocations(result => {
    res.status(200).send(Object.values(result))
  });

});



// db.connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT || 8000, () => {
  console.log(`server running on port ${process.env.PORT || 8000}`)
});
