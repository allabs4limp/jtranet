var express = require('express');
var _router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');


var storeMemo = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './Memos');
    },
    filename:function(req,file,cb){
      /*   cb(null, Date.now() +'.' + file.originalname); */
        cb(null,file.originalname);
    }
});

var StorePayslips = multer.diskStorage({
    destination:function(req,file,cbpayslip){
        cbpayslip(null, './Payslips');
    },
    filename: function(req,file,cbpayslip){
        cbpayslip(null,file.originalname);
    }
});


var StoreEyewitness = multer.diskStorage({
    destination:function(req,file,cbeyewtness){
        cbeyewtness(null, './EyeWitness');
    },
    filename: function(req,file,cbeyewtness){
        cbeyewtness(null,file.originalname);
    }
});


var uploadMemo = multer({storage:storeMemo}).single('file');
var uploadPayslips = multer({storage:StorePayslips}).single('file');
var uploadEyewitness = multer({storage:StoreEyewitness}).single('file');


_router.post('/upload', function(req,res,next){
    uploadMemo(req,res,function(err){
        if(err){
          return res.json(console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2)));
           /*  return res.status(501).json({error:err}); */
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename}); 
    });  
});

_router.post('/uploadPayslips', function(req,res,next){
    uploadPayslips(req,res,function(err){
        if(err){
          return res.json(console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2)));
           /*  return res.status(501).json({error:err}); */
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename}); 
    });  
});

_router.post('/uploadEyewitness', function(req,res,next){
    uploadEyewitness(req,res,function(err){
        if(err){
          return res.json(console.log('Error in retrieving User : ' + JSON.stringify(err, undefined, 2)));
           /*  return res.status(501).json({error:err}); */
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename}); 
    });  
});



 _router.post('/downloadfile', function(req,res,next){
    filepath = path.join(__dirname,'../Memos') +'/'+ req.body.filename;
    res.sendFile(filepath);
}); 

_router.post('/deletefile', function(req,res,next){
    filepath = path.join(__dirname,'../Memos') +'/'+ req.body.filename;
   fs.unlink(filepath);
    
       console.log('file deleted');
   })


_router.get('/getallfiles', function(req,res,next){
    let FilesData = [];
    let count = 0;
    fs.readdirSync('./Memos').forEach(file => {
        filepath = path.join(__dirname,'../Memos') + '/' + file;
        FilesData[count ++] = {
            originalname : path.basename(filepath),
            filename : filepath,
            contentType: file.contentType
        }  
      })
     return res.json(FilesData);
});


_router.post('/getallpayslip', function(req,response,next){
  
    let FilesData = [];
    let count = 0;
    let Feeds = '';
    filepath = path.join(__dirname,'../Payslips') + '/' + req.body.PayslipYear + '-' + req.body.PayslipMonth + '-' + req.body.PayslipIPPIS + '.pdf';
    fs.readFile(filepath, function(err, res){
    if (err) {
       return response.status(404).send('File does not exist');
    } else {
          return response.json([{
    originalname : path.basename(filepath),
    filename : filepath,
 contentType: 'file.contentType'}]);   
    }
 })

});

_router.post('/downloadfilePayslip', function(req,res,next){
    filepath = path.join(__dirname,'../Payslips') +'/'+ req.body.filename;
    res.sendFile(filepath);
}); 

_router.post('/downloadfileEyewitness', function(req,res,next){
    filepath = path.join(__dirname,'../EyeWitness') +'/'+ req.body.filename;
    res.sendFile(filepath);
}); 


module.exports = _router;