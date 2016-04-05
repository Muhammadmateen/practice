/**
 * Created by Mateen Bhai on 4/5/2016.
 */



(function()
{
  angular.module('starter')
    .config(function($stateProvider,$urlRouterProvider)
    {
      var navLogin = {
        templateUrl:'./components/nav-login/nav-login.html',
        controller:'nav_loginController',
        controllerAs:'nav_login'
      }

      var navTool = {
        templateUrl:'./components/nav-tool/nav-tool.html',
        controller:'nav_toolController',
        controllerAs:'nav_tool'
      }

      $stateProvider.state('signin',{
        url:'/signin',
        views:{
          'main':{
            templateUrl:'./components/sign-in/sign-in.html',
            controller:'signinController',
            controllerAs:'singin'
          }
        },
        isAuthenticate:false
      })

      .state('signup',{
        url:'signup',
        views:{
          'main':{
            templateUrl:'./components/sign-up/sign-up.html',
            controller:'signupController',
            controllerAs:'signup'
          }
        },
        isAuthenticate:false
      })

      /*.state('home',{
        url:'/home',
        views:{
          'nav':navTool,
          'main':{
            templateUrl:'./components/home/home.html',
            controller:'homeController',
            controllerAs:'home'
          }
        },
        isAuthenticate:true
      })

      .state('menu',{
        url:'/menu',
        views:{
          'nav':navTool,
          'main':{
            templateUrl:'./components/menu/menu.html',
            controller:'menuController',
            controllerAs:'menu'
          }
        },
        isAuthenticate:true
      })*/


      $urlRouterProvider.otherwise('signin');


      })
})();