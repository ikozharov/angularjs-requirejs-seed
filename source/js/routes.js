(function (define) {
  "use strict";

  define([
      'angularRoute',
      'modules/gravatar/index',
      'modules/todo/index'
    ],
    function ($routeProvider, GravatarController, TodoController) {
      var RouteManager = function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: "templates/index.html"
          })
          .when('/gravatar', {
            templateUrl: "templates/gravatar.html",
            controller: "GravatarController"
          })
          .when('/todo', {
            templateUrl: "templates/todos.html",
            controller: "TodoController"
          })
          .when('/todo/:state', {
            templateUrl: "templates/todos.html",
            controller: "TodoController"
          })
          .otherwise({
            redirectTo: '/'
          });
      };

      return ["$routeProvider", RouteManager];
    });


}(define));
