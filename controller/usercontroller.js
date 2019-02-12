const express = require('express');
var router = express.Router();
const ejs = require('ejs')
var app = express();


const sql = require('mssql/msnodesqlv8');


 router.get('/:email/:password', (req, res) => { 
    var data = [];
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
    request.input('email', sql.NVARCHAR, req.params.email);
    request.input('password', sql.NVARCHAR, req.params.password);
  
    request.execute('dbo.Login', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));
        
     /*  if (result.recordset[0] == null) {
        console.log('No Data returned');

      } else {
          console.log(result.recordset[0]);
          
      } */
      res.send(JSON.stringify(result.recordset));    
        
       
      

    });
}); 


module.exports = router;