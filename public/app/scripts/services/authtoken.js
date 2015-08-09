(function() {
  'use strict';

  angular
    .module('aleChimp2016App')
    .factory('authToken', authToken);

    /*jshint latedef: nofunc */
    function authToken($window) {
      var storage = $window.localStorage;
      var userToken = 'userToken';
      var cachedToken;

      var service = {
        setToken: setToken,
        getToken: getToken,
        isAuthenticated: isAuthenticated,
        removeToken: removeToken
      };

      return service;

      /*jshint latedef: nofunc */
      function setToken(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
      }

      /*jshint latedef: nofunc */
      function getToken() {
        if (!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }
        return cachedToken;
      }

      /*jshint latedef: nofunc */
      function isAuthenticated() {
        /*jshint validthis:true */
        return !!getToken();
      }

      /*jshint latedef: nofunc */
      function removeToken() {
        cachedToken = null;
        storage.removeItem(userToken);
      }
    }
})();
 