/**
 * Created by Mateen Bhai on 1/20/2016.
 */


var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var path = require("path");


var app = express();

var Ipublic = path.resolve(__dirname,'client');


app.use(express.static(Ipublic));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gayyasabcd@gmail.com',
        pass:   'abcdef123456'

        //meanstack02@gmial.com
        //meanstack
    }
});




app.post("/email",function(req,res)
{


    var mailOptions = {
        to: req.body.email,
        subject: 'Verification Email',
        html: "<h1 style='color: blue'>Hello Muhammad</h1><br><a href='http://google.com'>Google</a>"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
})




app.listen("3000",function()
{
    console.log("App is starting on 3000");
})