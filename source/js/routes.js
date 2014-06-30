(function (define) {
  "use strict";

  define([
      'angularRoute'
    ],
    function ($routeProvider) {
      var RouteManager = function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: "templates/index.html"
          })
          .when('/login', {
            templateUrl: "templates/login.html",
            controller: "LoginController"
          })
          .when('/:state', {
            templateUrl: "templates/index.html",
            controller: "TodoController"
          })
          .otherwise({
            redirectTo: '/'
          });
      };

      return ["$routeProvider", RouteManager];
    });


}(define));
