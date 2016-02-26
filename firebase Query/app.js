/**
 * Created by Mateen Bhai on 1/25/2016.
 */

(function ()
{
    var app = angular.module("myApp",['firebase','ngMaterial']);

    app.controller("indexctrl",['$scope','$rootScope','$firebaseObject',abc]);


    function abc($rootScope,$scope,$firebaseObject)
    {
        var _self = this


        /*var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");*/
        /*ref.orderByChild("height").on("child_added", function(snapshot) {
            console.log(snapshot.key() + " was Height " + snapshot.val().height+ "and Weight "+snapshot.val().weight  + " meters tall");
        });



        //order by weight and get to low weight values
        ref.orderByChild("weight").limitToLast(2).on("child_added", function(snapshot) {
            console.log("Heavy weight :"+snapshot.key()+" and Value is "+snapshot.val().weight);
        });



        //order by weight and get to heaviour weight values
        ref.orderByChild("weight").limitToFirst(2).on("child_added",function(data)
        {
            console.log("Low weight : "+data.key()+" and Value is "+data.val().weight)
        })


       //find first to value of this node
        ref.limitToFirst(2).on("child_added",function(data)
        {
            console.log("First Two values : "+data.key()+" and Value is "+data.val().weight)
        })


        //Find Last to values of this node
        ref.limitToLast(2).on("child_added",function(data)
        {
            console.log("Last Two values : "+data.key()+" and Value is "+data.val().weight)
        })*/


       /* ref.orderByChild("height").startAt(3).on("child_added", function(snapshot) {
            console.log("Key : "+snapshot.key()+" Value : "+snapshot.val().height);
        });*/


        /*ref.orderByChild("height").startAt(3).endAt(4).on("child_added", function(snapshot) {
            console.log("Key : "+snapshot.key()+" Value : "+snapshot.val().height);
        });*/


        /*ref.orderByChild("height").startAt(3).endAt(4).on("child_added", function(snapshot) {
         console.log("Key : "+snapshot.key()+" Value : "+snapshot.val().weight);
         });*/


        var ref = new Firebase("https://practiceabc.firebaseio.com");

        var self = this;

        _self.data = $firebaseObject(ref);

        _self.removeData = function()
        {
            _self.data.$remove(_self.data.names.facebook.a)
            _self.data.$save();
        }

       /* $scope.clearCompleted = function()
        {
            $scope.todos.forEach(function(todo)
            {
                if(todo.done){ $scope.todos.$remove(todo); }
            });
        };*/





    }


}());