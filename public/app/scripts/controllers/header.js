(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('HeaderCtrl', HeaderCtrl);

    /*jshint latedef: nofunc */
    function HeaderCtrl(authToken) {
      var vm = this;

      vm.isAuthenticated = authToken.isAuthenticated;
    }
})();