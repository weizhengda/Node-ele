var express = require('express');
var router = express.Router();

var DB = require('../model/dbmodle');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(123);
    var _id = req.query._id;
    console.log(_id);
    DB.find('shop',{_id:DB.ObjectID(_id)},function(err,data){
       if(err){
         console.log(err);
       }else{
         res.jsonp(data);
         console.log(data);
       }
   })
});

module.exports = router;
