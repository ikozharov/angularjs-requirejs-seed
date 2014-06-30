(function (define) {
  "use strict";

  define([
      'angular',
      'modules/footer/directives/footer'
    ],
    function (angular, Footer) {
      var moduleName = "App.footer";

      angular.module(moduleName, [])
        .directive('footer', Footer);

      return moduleName;
    });


}(define));
