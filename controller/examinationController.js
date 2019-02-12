const express = require('express');
var router = express.Router();
const ejs = require('ejs')
var app = express();


const sql = require('mssql/msnodesqlv8');


 router.get('/utmecentres', (req, res) => { 
    var request = new sql.Request();
    res.header("content-type: application/json");
    // query to the database and get the records
      request.execute('dbo.UtmeCentre_Fetch', function (err, result) {    
        if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
      res.send(JSON.stringify(result.recordset));    
    });
}); 

router.get('/regcentres', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.RegistrationCentre_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
}); 

router.get('/utmestates', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.UtmeStates_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
}); 

router.get('/sitreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.UtmeSitreport_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});

router.get('/regreport/:loggedby', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('loggedby', sql.NVARCHAR, req.params.loggedby);
  // query to the database and get the records
    request.execute('dbo.Regreport_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});



router.get('/regreportall', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.RegreportAll_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});


router.get('/eyewitnessreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  // query to the database and get the records
    request.execute('dbo.EyeWitnessReport_Fetch', function (err, result) {    
      if (err) console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2));    
    res.send(JSON.stringify(result.recordset));    
  });
});

router.get('/postings/:idcard', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('idcard', sql.NVARCHAR, req.params.idcard);
  // query to the database and get the records
    request.execute('dbo.Posting_Fetch', function (err, result) { 
      if (result.lenght != 0) {
        res.send(JSON.stringify(result.recordset)); 
        
      } else {
        return res.status(404).send('File does not exist');
      }
  });
}); 


router.get('/otherpostings/:idcard/:twncode', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('idcard', sql.NVARCHAR, req.params.idcard);
  request.input('twncode', sql.NVARCHAR, req.params.twncode);
  // query to the database and get the records
    request.execute('dbo.PostingTeam_Fetch', function (err, result) {    
      if (result.recordset == null) {
        return res.status(404).send('File does not exist');
      } else {
        res.send(JSON.stringify(result.recordset)); 
      }
  });
}); 

router.post('/updatesitreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('serialno', sql.Int, req.body.sitreport);
  request.input('issuestatus', sql.NVarChar, req.body.issuestat);
 
  // query to the database and post the records
    request.execute('dbo.Situation_Update', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    });
}); 


router.post('/insertregreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('statename', sql.NVarChar, req.body.StateName);
  request.input('centrename', sql.NVarChar, req.body.CentreName);
  request.input('issucategory', sql.NVarChar, req.body.IssueCategory);
  request.input('problemdesc', sql.NVarChar, req.body.ProblemDesc);
  request.input('solution', sql.NVarChar, req.body.Solution);
  request.input('issuestatus', sql.NVarChar, req.body.IssueStatus);
  request.input('loggedby', sql.NVarChar, req.body.loggedby);
 
  // query to the database and post the records
   request.execute('dbo.RegReport_insert', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    }); 
}); 

router.post('/updateregreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('serialno', sql.Int, req.body.regreport);
  request.input('issuestatus', sql.NVarChar, req.body.issuestat);

  // query to the database and post the records
   request.execute('dbo.Registration_update', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    }); 
}); 

router.post('/eyewitnessreport', (req, res) => { 
  var request = new sql.Request();
  res.header("content-type: application/json");
  request.input('statename', sql.NVarChar, req.body.StateName);
  request.input('centrename', sql.NVarChar, req.body.CentreName);
  request.input('problemdesc', sql.NVarChar, req.body.ProblemDesc);
  request.input('filename', sql.NVarChar, req.body.filename);
  request.input('loggedby', sql.NVarChar, req.body.loggedby);
 
  // query to the database and post the records
   request.execute('dbo.EyeWitnessReport_insert', function (err, result) {    
    if (err) res.status(400).json({ 'idcard': "Unable to Save to db"});
    else{
      res.status(200).json({ 'idcard': "Sucessfully Saved"});
    }
    }); 
}); 






module.exports = router;