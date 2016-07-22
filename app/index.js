'use strict';

angular.module('angu', [
  'ngRoute',
  'ngTable',
  'angu.service',
  'angu.home',
  'angu.table',
  'angu.manage',
  'angu.json',
  'angu.httpProvider',
  'angu.http'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/home'});
}]);