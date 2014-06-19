(function (define) {
  "use strict";

  define(function () {
    var Edit = function () {
      return {
        restrict: 'C',
        link: function (scope, element) {
          element.on("click", function (e) {
            element.parent().parent().find('li').removeClass("active");
            element.parent().addClass("active");
          });
        }
      };
    };

    return Edit;

  });

})(define);
