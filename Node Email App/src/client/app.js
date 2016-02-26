/**
 * Created by Mateen Bhai on 1/20/2016.
 */


var app = angular.module("myApp",[]);

    app.controller("indexCtrl",function($http)
    {
        var _self = this;



        _self.sendEmail = function()
        {
            $http.post("/email",_self.mail).then(function(data)
            {
                console.log("Data come",data);

            },function(err)
            {
                console.log("Request not send on server",err);
            })
        }

    });