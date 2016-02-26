/**
 * Created by Mateen Bhai on 2/26/2016.
 */


(function()
{
    angular.module("myApp",["angular.filter"])

    .controller("ctrl",['$scope',ctrl_func])

    function ctrl_func($scope)
    {
        var _self = this;

        _self.players = [
            {name: 'Gene', team: 'alpha'},
            {name: 'George', team: 'beta'},
            {name: 'Steve', team: 'gamma'},
            {name: 'Paula', team: 'beta'},
            {name: 'Paula', team: 'beta'},
            {name: 'Paula', team: 'beta'},
            {name: 'Paula', team: 'beta'},
            {name: 'Paula', team: 'beta1'},
            {name: 'Scruath', team: 'gamma'}
        ];
        console.log(_self.players);
    }
}())