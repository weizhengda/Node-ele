var express = require('express');
var router = express.Router();

var DB = require('../model/dbmodle');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(123);
    var u_id = req.query.u_id;
    console.log(u_id);
    DB.find('user',{u_id:DB.ObjectID(u_id)},function(err,data){
       if(err){
         console.log(err);
       }else{
         res.jsonp(data);
         console.log(data);
       }
   })
});

module.exports = router;
