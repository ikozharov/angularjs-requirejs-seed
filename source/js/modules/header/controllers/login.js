(function (define) {
  "use strict";

  define(function () {
    var LoginController = function ($scope, $rootScope, $http, $location, AUTH_EVENTS, Session) {
      $scope.credentials = {
        email: '',
        password: ''
      };

      $scope.login = function (credentials) {
        // $http
        //   .post('/login', credentials)
        //   .then(function (res) {
        //     Session.create(res.id, res.userid, res.role);
        //     $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        //   }, function () {
        //     $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        //   });

        Session.create(credentials.email, 1, 'test');
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $location.path('/');
      };

      $scope.logout = function () {
        Session.destroy();
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      };
    };

    return [
      '$scope',
      '$rootScope',
      '$http',
      '$location',
      'AUTH_EVENTS',
      'Session',
      LoginController
    ];

  });
}(define));
