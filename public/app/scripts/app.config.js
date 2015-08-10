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
    })

    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl',
      controllerAs: 'vm'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'vm'
    })

    .state('dashboard.add', {
      url: '/add',
      templateUrl: 'views/dashboard-add.html',
      controller: 'AddIndexCtrl',
      controllerAs: 'vm'
    })

    .state('dashboard.show', {
      url: '/show',
      templateUrl: 'views/dashboard-show.html',
      controller: 'ShowIndexCtrl',
      controllerAs: 'vm'
    });
  });
})();