(function (define) {
  "use strict";

  define(function () {
    var TodoController = function ($scope, $routeParams, todoStorage, filterFilter, templates) {
      var todos = $scope.todos = todoStorage.get(),
        editTodo;

      $scope.state = '';
      $scope.routeParams = $routeParams;
      $scope.newTodo = '';
      $scope.stateFilter = null;
      $scope.template = templates.todo;

      $scope.addTodo = function ($event) {
        if ($event.keyCode === 13) {
          var newTodo = $scope.newTodo.trim();
          if (!newTodo.length) {
            return;
          }

          todos.push({
            title: newTodo,
            completed: false,
            template: templates.todo
          });

          $scope.newTodo = '';
        }
      };

      $scope.toggleSucces = function (todo) {
        todo.completed = !todo.completed;
      };

      $scope.edit = function (todo) {
        if (editTodo) {
          editTodo.template = templates.todo;
        }

        editTodo = todo;
        todo.template = templates.edit;
      };

      $scope.stopEdit = function (e) {
        if (e && e.keyCode === 13) {
          editTodo.template = templates.todo;
        } else if (!e) {
          editTodo.template = templates.todo;
        }
      };

      $scope.$watch('todos', function () {
        $scope.remainingCount = filterFilter(todos, {
          completed: false
        }).length;
        $scope.doneCount = todos.length - $scope.remainingCount;
        todoStorage.set(todos);
      });

      $scope.$watch('routeParams.state', function (state) {
        $scope.state = state || '';
        if (state === 'active') {
          $scope.stateFilter = {
            completed: false
          };
        } else if (state === 'completed') {
          $scope.stateFilter = {
            completed: true
          };
        } else {
          $scope.stateFilter = null;
        }
      });
    };

    return ['$scope', '$routeParams', 'todoStorage', 'filterFilter', 'templates', TodoController];
  });
}(define));
