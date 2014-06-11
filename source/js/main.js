require.config({
  paths: {
    angular: '../../vendor/angular/angular',
    angularRoute: '../../vendor/angular-route/angular-route',
    md5: '../../vendor/blueimp-md5/js/md5'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'md5' : {'exports' : 'md5'}
  },
  priority: [
    "angular"
  ]
});

require( [
  'angular',
  'angularRoute',
  'app'
]);
