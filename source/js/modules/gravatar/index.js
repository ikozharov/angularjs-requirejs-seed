(function (define) {
  "use strict";

  define([
      'angular',
      'modules/gravatar/controllers/gravatar',
      'modules/gravatar/directives/gravatar'
    ],
    function (angular, GravatarController, Gravatar) {
      var moduleName = "App.gravatar";

      angular
        .module(moduleName, [])
        .controller("GravatarController", GravatarController)
        .directive('gravatar', Gravatar);

      return moduleName;
    });


}(define));
