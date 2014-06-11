(function (define) {
  "use strict";

  define([
      'modules/gravatar/index',
      'modules/navigation/index',
      'modules/todo/index',
      'routes'
    ],
    function (GravatarModule, NavigationModule, TodoModule, RouteManager) {
      var app, appName = 'App';

      app = angular
        .module(
          appName, ["ngRoute", GravatarModule, NavigationModule, TodoModule]
        )
        .config(RouteManager);

      angular.bootstrap(document.getElementsByTagName("body")[0], [appName]);

      return app;
    }
  );

}(define));
