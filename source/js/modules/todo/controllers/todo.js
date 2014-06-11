(function (define) {
  "use strict";

  define(function () {
    var TodoController = function () {
      this.items = [
          {
              'id': 1,
              'title': 'Gravatar'
          },
          {
              'id': 2,
              'title': 'Todo'
          }
      ];
    };

    return [TodoController];

  });
}(define));
