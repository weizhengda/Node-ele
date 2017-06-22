var express = require('express');
var router = express.Router();

var DB = require('../model/dbmodle');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var u_phone = req.query.u_phone;
    var u_pwd  = req.query.u_pwd
    console.log(u_phone);
    var obj ={
       u_phone:u_phone,
       u_pwd:u_pwd
    }
    console.log(obj);
    DB.find('user',obj,function(err,data){
       if(data.length !=0){
          res.jsonp({"result":"登录成功！",'data':data});
       }else{      
          res.jsonp({"result":"登录失败！"});
       }
   })
});

module.exports = router;
