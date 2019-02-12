const express = require('express');
var router = express.Router();
const ejs = require('ejs')
var app = express();


const sql = require('mssql/msnodesqlv8');


 router.get('/leave', (req, res) => { 
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
      request.execute('dbo.LeaveType_Fetch', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
      res.send(JSON.stringify(result.recordset));    
    });
}); 



module.exports = router;