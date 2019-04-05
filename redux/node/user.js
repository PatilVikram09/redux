var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.Promise = global.Promise;

var instance = express();

instance.use(bodyparser.urlencoded({extended:false}));
instance.use(bodyparser.json());
instance.use(cors());

var userSchema = mongoose.Schema({
    UserId:Number,
    Name:String,
    Address:String,
    Email:String
});

mongoose.connect(
    "mongodb://localhost/userInfo",
    {useNewUrlParser:true}
);
var dbConnect = mongoose.connection;
if(!dbConnect){
    console.log("Connection is not established");
    return;
}

var userModel = mongoose.model("Users", userSchema,"Users");

instance.get('/user', function(request,response){
    userModel.find().exec(function(err,res){
        if(err){
            respose.status = 500;
            response.send({status:respose.status, error:err});
        }
        response.send({status:200, data:res});
    });
    
});

instance.post('/user', function(request,response){
    var usr = {
        UserId:request.body.UserID,
        Name:request.body.Name,
        Address:request.body.Address,
        Email:request.body.Email
    }

     userModel.create(usr, function(err,res){
        if(err){
            respose.status = 500;
            response.send({status:respose.status, error:err});
        }
        response.send({status:200, data:res});
    });
});


instance.listen(4070, function(){
    console.log("Started listing on port 4070")
});