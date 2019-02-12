const express = require('express');
var router = express.Router();
const ejs = require('ejs')
var app = express();


const sql = require('mssql/msnodesqlv8');


 router.get('/department', (req, res) => { 
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
      request.execute('dbo.TotalDepartment_Fetch', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
      res.send(JSON.stringify(result.recordset));    
    });
}); 


router.get('/users', (req, res) => { 
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
      request.execute('dbo.TotalUsers_Fetch', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
      res.send(JSON.stringify(result.recordset));    
    });
});


router.get('/reglog', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.TotalRegLog_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});

router.get('/regopen', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.TotalRegOpen_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});

router.get('/regresolve', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.TotalRegResolve_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});


module.exports = router;