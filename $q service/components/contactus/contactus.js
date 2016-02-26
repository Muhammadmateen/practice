/**
 * Created by Mateen Bhai on 1/23/2016.
 */


(function()
{
    angular.module("app")

        .controller("contactus_controller",['url',contactus_ctrl_func])

        function contactus_ctrl_func(url)
        {

            console.log("Contact Us function working");
            console.log(url);
        }


}());