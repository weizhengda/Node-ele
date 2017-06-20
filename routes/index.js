var express = require('express');
var router = express.Router();
var DB = require('../model/dbmodle');

/* GET home page. */
router.get('/', function(req, res, next) {
   DB.find('shop',{},function(err,data){
       if(err){
         console.log(err);
       }else{
         res.jsonp(data);
       }
   })
});

module.exports = router;
