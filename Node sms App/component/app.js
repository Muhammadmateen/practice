


(function()
{

    var app = angular.module("smsApp",[]);

    app.controller("smsApp_controller",['$http',smsController_func]);

    function smsController_func($http)
    {
console.log("Controller working");

        var _self = this;
        _self.sendSms = function()
        {

            console.log("Function calll");
            $http.post('/sendSms').then(function(data)
            {
                console.log("Successfully sent");
                console.log(data);

            },function(err)
            {
                console.log("Request not send on server");
                console.log(err);
            })
        }

    };



}());