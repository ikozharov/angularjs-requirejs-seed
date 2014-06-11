(function (define) {
  "use strict";

  define(function () {
    var NavigationController = function () {
      this.items = [
          {
              'id': 1,
              'label': 'Gravatar',
              'url': '#/gravatar'
          },
          {
              'id': 2,
              'label': 'Todo',
              'url': '#/todo'
          }
      ];
      this.active = 0;

      this.activated= function(index) {
        this.active = index;
      };
    };

    return [NavigationController];

  });
}(define));
