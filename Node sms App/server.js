/**
 * Created by Mateen Bhai on 1/22/2016.
 */


var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var TMClient = require('textmagic-rest-client');

var app = express();

var path = path.resolve(__dirname,"component");

app.use(express.static(path));


var accountSid = 'ACf2fc4c2bfb8420adab53052a85bcf374';
var authToken = 'e218f75d1d360bc7db75a51bf1755b29';

//require the Twilio module and create a REST client
var client = require("twilio")(accountSid, authToken);



app.post('/sendSms',function(req,res)
{
   /* client.sendMessage({
        to: "+923342534284",
        from: "+18637030445",
        body: "Helo World Mean stack"
    }, function(err, responseData) {

        if (!err) {


            console.log(responseData.from);
            console.log(responseData.body);
            res.send("Success",responseData);
        }
        else
        {
            res.send(err);
        }

        /!*console.log("Server message Sent :",message);
        res.send("Server message Sent :",message);*!/
    });*/

    var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
    c.Messages.send({text: 'test message', phones:'9990001'}, function(err, res){
        console.log('Messages.send()', err, res);
    };

});










app.listen("3000",function()
{
    console.log("App is running on port 3000");
})

