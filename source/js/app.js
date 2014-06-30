(function (define) {
  "use strict";

  define([
      'modules/header/index',
      'modules/footer/index',
      'modules/todo/index',
      'modules/gravatar/index',
      'routes'
    ],
    function (HeaderModule, FooterModule, TodoModule, GravatarModule, RouteManager) {
      var app, appName = 'App';

      app = angular
        .module(
          appName, ["ngRoute", HeaderModule, FooterModule, TodoModule, GravatarModule]
        )
        .constant('AUTH_EVENTS', {
          loginSuccess: 'auth-login-success',
          loginFailed: 'auth-login-failed',
          logoutSuccess: 'auth-logout-success',
          notAuthenticated: 'auth-not-authenticated',
          notAuthorized: 'auth-not-authorized'
        })
        .service('Session', function () {
          this.create = function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
          };
          this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
          };
          return this;
        })
        .controller('ApplicationController', ['$rootScope', 'Session', 'AUTH_EVENTS',
          function ($rootScope, Session, AUTH_EVENTS) {
            $rootScope.currentUser = null;

            $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
              $rootScope.currentUser = Session;
            });

            $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
              $rootScope.currentUser = null;
            });
          }
        ])
        .config(RouteManager);

      angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);

      return app;
    }
  );

}(define));
