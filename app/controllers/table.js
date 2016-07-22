'use strict';

angular.module('angu.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'views/table.html',
    controller: 'TableIndexCtrl'
  });
}])

.controller('TableIndexCtrl', ['TableService', '$scope', function(TableService, $scope) {
	var vm = this;
	var data = [{id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52}];
	vm.tableParams = TableService.list(data);

	$scope.vm = vm;
}]);