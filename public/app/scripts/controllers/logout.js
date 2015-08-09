(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('LogoutCtrl', LogoutCtrl);

    /*jshint latedef: nofunc */
    function LogoutCtrl(authToken, $state) {
      authToken.removeToken();
      $state.go('main');
    }
})();
