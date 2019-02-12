const mongoose = require('mongoose');

const sql = require('mssql/msnodesqlv8');

var config = {
  driver: 'msnodesqlv8',
 connectionString: 'Driver={SQL Server Native Client 11.0};Server={DESKTOP-MM2JFET};Database={jtranet};Trusted_Connection={yes};',   

/*  connectionString: 'Driver={SQL Server Native Client 11.0};Server=188.121.44.214;Database=JAMB_INTRANET;UId=DIRECTORITS; Pwd=Administrator$14;Trusted_Connection={NO};' */


};

sql.connect(config, function(err){
    if (err)
    console.log('Error in Db Connection : ' + err);
    else
    console.log('SQL Server Connection Succesful...');        
})

// mongoose.connect('mongodb://localhost:27017/JAMB', (err) => {
//     if (!err)
//     console.log('MongoDB Connection Succesful...');
//     else
//     console.log('Error in Db Connection : ' + JSON.stringify(err, undefined, 2));
// });

// module.exports = mongoose;

module.exports = sql;
