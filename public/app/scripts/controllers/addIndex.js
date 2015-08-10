(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('AddIndexCtrl', AddIndexCtrl);

    /*jshint latedef: nofunc */
    function AddIndexCtrl() {
      var vm = this;

      // temp mock data
      var add = ['Add Patron', 'Add Beer', 'Create Notif'];

      vm.addActions = add;
    }
})();
