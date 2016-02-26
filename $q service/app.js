/**
 * Created by Mateen Bhai on 1/23/2016.
 */



(function ()
{
    var app = angular.module("app",['ui.router']);



    app.controller("index_ctrl",['$q',abc]);



    app.config(states_config);

    function states_config($urlRouterProvider,$stateProvider)
    {

        console.log("Config pahse working");

        $stateProvider.state('home',
        {
            url:'/home/:id',
            templateUrl:'./components/home/home.html',
            controller:'home_controller',
            controllerAs:'home_ctrl'
        })

            .state('contactus',
            {
                url:'/contactus',
                templateUrl:'./components/contactus/contactus.html',
                controller:'contactus_controller',
                controllerAs:'contactus_ctrl'
            })

        $urlRouterProvider.otherwise('home');
    }

    app.run(function($state)
    {
        console.log("Run phase working");
        if(0)
        {
            $state.go("home")
        }



    })



    app.constant("url","http://www.google.com");

    function abc($q) {

        /*_self = this;

        this.bbb = function (a, b, c) {
            /!*c = (typeof c == "undefined") ? true : c

             console.log("A : ",a," B : ",b," C : ",c);*!/


        }*/

        /*_self.abc = check_numb(5,6);
        _self.abc.then(function(success)
        {
            console.log("Success working");

        },function(err)
        {
            console.log("Error working");
        })


        function check_numb(a,b)
        {
            var deferred  = $q.defer();
            if (a>b)
            {
                deferred.resolve(console.log("A greater than B"));
            }
            else
            {
                deferred.reject(console.log("A is not greater than B"));
            }

            return deferred.promise;
        };*/

        console.log("Controller phase working");

    };

}());
