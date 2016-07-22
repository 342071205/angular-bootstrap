'use strict';

angular.module('angu.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeIndexCtrl'
  });
}])

.controller('HomeIndexCtrl', ['$scope', function($scope) {
	var vm = this;
	$scope.vm = vm;
}]);