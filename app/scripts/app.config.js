(function() {
  'use strict';

  angular
  .module('aleChimp2016App')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/');

    $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl',
      controllerAs: 'vm'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm'
    });
  });
})();