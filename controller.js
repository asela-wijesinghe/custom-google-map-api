'user strict';
var sql = require('./db/connection');


var getAllLocations = function getAllLocations(result) {
  sql.query("Select * from locations", function (err, res) {

          if(err) {
              console.log("error: ", err);
              result( err);
          }
          else{
            console.log('tasks : ', res);

           result( res);
          }
      });
};

module.exports= getAllLocations;
