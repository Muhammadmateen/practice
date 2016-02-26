/**
 * Created by Mateen Bhai on 1/25/2016.
 */


(function()
{

    var app = angular.module("myApp",["ngMaterial","firebase"]);

    app.controller("ctrl",['$firebaseObject','$firebaseArray',index_ctrl_func]);

    function index_ctrl_func($firebaseObject,$firebaseArray) {

        _self = this;
        var ref = new Firebase("https://practiceabc.firebaseio.com/users");
        //_self.data = $firebaseObject(ref);
        _self.dataa = $firebaseArray(ref);

        /* _self.addUser = function()
         {


         _self.data.$save({
         fName:_self.user.firstName,
         lName:_self.user.lastName,
         email:_self.user.email
         }).then(function(data)
         {
         console.log("Data :",data);
         _self.user = "";
         },function(err)
         {
         console.log("Data :",err);
         _self.user = "";
         });

         }*/


        _self.addUser = function () {

            _self.dataa.$add({
                fName: _self.user.firstName,
                lName: _self.user.lastName,
                email: _self.user.email
            }).then(function (data) {
                console.log("Data : ", data.path.u[1]);
            })

        };



        _self.removeUser = function()
        {
            var a = parseInt(_self.indx);
            /*console.log(a);*/

            _self.dataa.$remove(a)
                .then(function(data)
                {
                    console.log("Data :",data);
                },function(err)
                {
                    console.log("Error :",err)
                })
        }



       /* var dataa = $firebaseArray(ref);
        /!*dataa[2].emial = "bar";*!/
        dataa.$save(2).then(function(ref) {
            ref.key() === list[2].$id; // true
        });
*/

    };

}());