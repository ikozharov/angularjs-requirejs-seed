(function (define) {
  "use strict";

  define(function () {
    var storage = function (templates) {
      var STORAGE_ID = 'todoStorage';

      return {
        get: function () {
          var res = [];

          JSON.parse(localStorage.getItem(STORAGE_ID) || '[]').forEach(function (e) {
            e.template = templates.todo;
            res.push(e);
          });

          return res;
        },

        set: function (todos) {
          var copy = [];

          todos.forEach(function (e) {
            copy.push({
              completed: e.completed,
              title: e.title
            });
          });

          localStorage.setItem(STORAGE_ID, JSON.stringify(copy));
        }
      };
    };

    return ['templates', storage];

  });

})(define);
