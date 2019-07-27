var Promise = require("bluebird"),
    mongoose = require('mongoose'),
    path = require('path'),
    express = require('express'),
    router = express.Router(),
    dbQuery = require('../dbquery/query');

router.get('/',(req, res, next)=>{
  dbQuery.getAllData().then(
    data=>{res.send({success:true, data:data});console.log(data);}
   ,err => res.send({success:false, msg:err})
  )
})

router.post('/add',(req, res, next)=>{
  console.log(req.body);
  dbQuery.addNew(req.body).then(
     data=>res.send({success:true, data:data})
    ,err => res.send({success:false, msg:err})
  )
})

router.get('/edit/:_id',(req, res, next)=>{
  var id =req.params._id;
  console.log(id);
  dbQuery.getById(id).then(
     userData=>res.send({success:true, data:data})
    ,err => res.send({success:false, msg:err})
  )
})

router.post('/update/:_id',(req, res, next)=>{
  var id =req.params._id;
  console.log(id);
  dbQuery.updateById(id,req.body).then(
     userData=>res.send({success:true, data:data})
    ,err => res.send({success:false, msg:err})
  )
})

router.get('/delete/:_id',(req, res, next)=>{
  var id =req.params._id;
  console.log(id);
  dbQuery.deleteById(id).then(
    succ => res.send('deleted successfully')
  ).catch(
    err => res.send('delete fail') //res.redirect('/all')
  );
})

module.exports = router;
