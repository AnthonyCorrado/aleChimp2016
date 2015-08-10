(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('ShowIndexCtrl', ShowIndexCtrl);

    /*jshint latedef: nofunc */
    function ShowIndexCtrl() {
      var vm = this;

      // temp mock data
      var show = ['Show Beers', 'Show Patrons', 'Show Notifs'];

      vm.showActions = show;
    }
})();