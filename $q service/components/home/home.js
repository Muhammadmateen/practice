/**
 * Created by Mateen Bhai on 1/23/2016.
 */


/**
 * Created by Mateen Bhai on 1/23/2016.
 */


(function()
{
    angular.module("app")

        .controller("home_controller",['url',home_ctrl_func])

    function home_ctrl_func(url)
    {
        console.log("Home Function working");
        console.log(url);
    }


}());