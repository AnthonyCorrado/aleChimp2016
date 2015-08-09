(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .controller('SignupCtrl', Signup);

    function Signup($http, toastr) {
      var vm = this;
         vm.submit = submit;

      function submit() {
        var url = 'http://localhost:3000/signup';
        var user = {
          name: 'Anthony'
        };
        console.log(url, 'url');
        $http.post(url, user)
          .success(function(res) {
            console.log(res, 'this good');
            toastr.success('Welcome', user);
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
