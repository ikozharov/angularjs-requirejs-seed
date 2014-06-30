(function (define) {
  "use strict";

  define([
      'angular',
      'modules/header/controllers/login',
      'modules/header/directives/header'
    ],
    function (angular, LoginController, Header) {
      var moduleName = "App.header";

      angular.module(moduleName, [])
        .controller("LoginController", LoginController)
        .directive('header', Header);

      return moduleName;
    });


}(define));
