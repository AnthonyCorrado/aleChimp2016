(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('SignupCtrl', Signup);

    /*jshint latedef: nofunc */
    function Signup($http, toastr, authToken) {
      var vm = this;
      vm.submit = submit;
      vm.email = '';
      vm.password = '';

      /*jshint latedef: nofunc */
      function submit() {
        var url = 'http://localhost:3000/signup';
        var user = {
          email: vm.email,
          password: vm.password
        };

        $http.post(url, user)
          .success(function(res) {
            toastr.success('Welcome', user);
            authToken.setToken(res.token);
          })
          .error(function(err) {
            toastr.error(err, 'Signup Failed');
            // toastr.error(err, 'Signup Failed', {
            //   iconClass: 'toast-error'
            // });
          });
      } 
    }
})();
