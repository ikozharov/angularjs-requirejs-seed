(function (define) {
  "use strict";

  define(function () {
    return ['$http', function ($http) {
      var Records = function (url) {
        this.url = url;
        this.all = null;

        return this;
      };

      Records.prototype.fill = function (callback) {
        var that = this;
        $http({ method: 'GET', url: this.url })
          .success(function(response, status, headers, config) {
            that.all = response;
            if (typeof callback === 'function') {
              callback(false, response);
            }
          })
          .error(function(response, status, headers, config) {
            callback(new Error(status), response);
          });

        return this;
      };

      Records.prototype.get = function (callback) {
        return this;
      };

      Records.prototype.find = function (ids, callback) {
        return this;
      };

      Records.prototype.update = function (id, callback) {
        return this;
      };

      Records.prototype.delete = function (ids, callback) {
        return this;
      };

      Records.prototype.create = function (items, callback) {
        return this;
      };

      return Records;
    }];
  });
}(define));
