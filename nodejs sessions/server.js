/**
 * Created by Mateen Bhai on 2/2/2016.
 */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var app = express();

var filePath = path.resolve(__dirname,"components");
app.use(express.static(filePath));
/*app.use(session({secret: 'ssshhhhh'}));*/



var sess;
app.get('/',function(req,res){
    sess=req.session;
    sess.id = req.body.id;
});

/*app.use(express.cookieParser('S3CRE7'));
app.use(express.cookieSession());
app.use(app.router);*/

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


/*app.use(express.cookieSession({
    key: 'app.sess',
    secret: 'SUPERsekret'
}));*/


app.use('/abc',function(req,res,next)
{
    console.log("Data in Middleware :",req.body);
        if(sess.id)
        {
            next();
        }
         else
        {
            next("Error in req.body.id not found");
        }
})



app.post('/abc',function(req,res)
{
    //console.log(req.body);
    res.send("OK OK OK");
})



app.listen("3000",function()
{
    console.log("App is in opening state");
})
