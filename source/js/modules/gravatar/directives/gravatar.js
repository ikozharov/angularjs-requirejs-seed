(function (define) {
  "use strict";

  define(['md5'], function (md5) {
    return function () {
      var scope = null, generateParams, onEmailChange, onSizeChange, onImageChanged;

      generateParams = function () {
        var options = [];
        scope.params = '';
        angular.forEach(scope.options, function (value, key) {
          if (value) {
            options.push(key + '=' + encodeURIComponent(value));
          }
        });
        if (options.length > 0) {
          scope.params = '?' + options.join('&');
        }
      };

      onEmailChange = function (email) {
        if (email) {
          // Encrypt email using md5 cipher
          scope.hash = md5(email.trim().toLowerCase());
        }
      };

      onSizeChange = function (size) {
        scope.options.s = (angular.isNumber(size)) ? size : undefined;
        generateParams();
      };

      onImageChanged = function (defaultImage) {
        scope.options.d = defaultImage ? defaultImage : undefined;
        generateParams();
      };

      return {
        restrict: 'E',
        replace: true,
        scope: {
          email: '=',
          defaultImage: '=',
          size: '='
        },
        link: function ($scope, element, attrs) {
          scope = $scope;
          scope.options = {
            s : undefined, // size
            d : undefined // default image
          };
          scope.params = ''; // query params of options
          scope.hash = ''; // md5 of email

          scope.$watch('email', onEmailChange);
          scope.$watch('size', onSizeChange);
          scope.$watch('defaultImage', onImageChanged);
        },
        template: '<img class="img-circle" ng-src="http://www.gravatar.com/avatar/{{hash}}{{params}}"/>'
      };
    };
  });

})(define);
