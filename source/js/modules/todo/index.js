(function (define) {
  "use strict";

  define([
      'angular',
      'modules/todo/controllers/todo'
    ],
    function (angular, TodoController) {
      var moduleName = "App.todo";

      angular
        .module(moduleName, [])
        .controller("TodoController", TodoController);

      return moduleName;
    });


}(define));
