(function (define) {
  "use strict";

  define([
      'angular',
      'modules/navigation/controllers/navigation',
      'modules/navigation/directives/navigation'
    ],
    function (angular, NavigationController, Navigation) {
      var moduleName = "App.navigation";

      angular.module(moduleName, [])
        .controller("NavigationController", NavigationController)
        .directive('navigation', Navigation);

      return moduleName;
    });


}(define));
