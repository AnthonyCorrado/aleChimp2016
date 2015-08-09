(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('SignupCtrl', Signup);

    function Signup($http) {
      var vm = this;
         vm.submit = submit;

      function submit() {
        var url = '/';
        var user = "";
        $http.post(url, user)
          .success(function(res) {
            console.log(res, 'this good');
          })
          .error(function(err) {
            console.log(err, 'error');
          });
        console.log('this worked');
      } 
    }
})();
