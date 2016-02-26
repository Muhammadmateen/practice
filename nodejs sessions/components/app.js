/**
 * Created by Mateen Bhai on 2/2/2016.
 */

var app = angular.module("myApp",[]);

app.controller("ctrl",function($http)
{


    var vm = this;


    vm.setSession = function()
    {
        $http.post('/abc',{id:localStorage.getItem("id")}).then(function(data)
        {
            console.log("Data :",data);
        },function(err)
        {
            console.log("Error : ",err);
        });
    }

    vm.setLocalStorage = function()
    {
        localStorage.setItem("id","Mateen");
        console.log("Id is set");
    }

    vm.removeLocalStorage = function()
    {
        localStorage.removeItem("id");
        console.log("Key remove");
    }

})