const express = require('express');
var router = express.Router();
const ejs = require('ejs')
var app = express();



const sql = require('mssql/msnodesqlv8');


 router.get('/staffdetails', (req, res) => { 
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
      request.execute('dbo.Staffdetails_Fetch', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
      res.send(JSON.stringify(result.recordset));    
    });
}); 

router.get('/department', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.Departments_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
}); 

router.post('/addnew', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");

  request.input('idcard', sql.NVarChar, req.body.idcard);
  request.input('staffname', sql.NVarChar, req.body.staffname);
  request.input('conraiss', sql.Int, req.body.conraiss);
  request.input('department', sql.Int, req.body.department);
  request.input('intercom', sql.NVarChar, req.body.intercom);
  request.input('email', sql.NVarChar, req.body.email);
 
  // query to the database and post the records
    request.execute('dbo.Staffdetails_Insert', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    });
}); 


router.post('/updatestaff', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('serial', sql.int, req.body.serial);
  request.input('idcard', sql.NVarChar, req.body.idcard);
  request.input('staffname', sql.NVarChar, req.body.staffname);
  request.input('conraiss', sql.Int, req.body.conraiss);
  request.input('department', sql.Int, req.body.department);
  request.input('intercom', sql.NVarChar, req.body.intercom);
  request.input('email', sql.NVarChar, req.body.email);



  // query to the database and post the records
    request.execute('dbo.Staffdetails_Update', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    });
}); 


router.post('/updateprof', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('idnum', sql.NVarChar, req.body.IDNum);
  request.input('certnum', sql.NVarChar, req.body.Certnum);
  request.input('department', sql.Int, req.body.Department);
  request.input('email', sql.NVarChar, req.body.Email);
  request.input('phonenum', sql.NVarChar, req.body.PhoneNum);
  request.input('staffname', sql.NVarChar, req.body.StaffName);
  request.input('level', sql.Int, req.body.level);

  // query to the database and post the records
    request.execute('dbo.Staffdetails_UpdateProfile', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    });
}); 







module.exports = router;