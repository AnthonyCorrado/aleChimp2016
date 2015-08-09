(function() {
    'use strict';

    angular
        .module('aleChimp2016App')
        .config(function($stateProvider) {

            $stateProvider

                .state('main', {
                    url: '/',
                    templateUrl: 'views/main.html'
                })

                .state('login', {
                    url: '/login',
                    templateUrl: 'views/login.html'
                });
        });
})();