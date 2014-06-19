(function (define) {
  "use strict";

  define([
      'angular',
      'modules/todo/controllers/todo',
      'modules/todo/services/storage',
      'modules/todo/directives/todoEdit'
    ],
    function (angular, TodoController, TodoStorage, TodoEdit) {
      var moduleName = "App.todo",
        tpl = {
          todo: 'templates/todo.html',
          edit: 'templates/edit.html'
        };

      angular
        .module(moduleName, [])
        .value('templates', tpl)
        .factory('todoStorage', TodoStorage)
        .controller('TodoController', TodoController)
        .directive('todoEdit', TodoEdit);

      return moduleName;
    });


}(define));
