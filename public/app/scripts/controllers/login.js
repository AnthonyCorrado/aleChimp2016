(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('LoginCtrl', Login);

    function Login() {
      var vm = this;
      vm.test = 'happy';
    }
})();
