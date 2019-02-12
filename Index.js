const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const http = require('http');

// const { mongoose } = require('./db.js');
const { edge } = require('./db.js');


var userController = require('./controller/usercontroller')
var dashboardController = require('./controller/dashboardController')
var ExaminationController = require('./controller/examinationController')
var StaffController = require('./controller/staffController')
var applicationsController = require('./controller/applicationsController')
var uploadsController = require('./controller/uploadsController')

var app = express();
app.use(bodyParser.json());

var CorsOptions = {
  origin: 'http://localhost:4200',
  credentials: true 
};
app.use(cors(CorsOptions));
app.use('', express.static(path.join(__dirname, 'angular')));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
}); 
app.use('/user', userController);
app.use('/dashboard', dashboardController);
app.use('/examination', ExaminationController);
app.use('/staff', StaffController);
app.use('/applications', applicationsController);
app.use('/uploads', uploadsController);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,'angular', 'index.html'));
});

/* app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html')); // load the single view file (angular will handle the page changes on the front-end)
}); */

app.listen(process.env.PORT || 8080, () => console.log('Server started at port : 3000'));