'use strict';

angular.module('angu.json', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/json', {
    templateUrl: 'views/json.html',
    controller: 'JsonIndexCtrl'
  });
}])

.controller('JsonIndexCtrl', ['$scope', '$http', 'TableService', function( $scope , $http , TableService ) {
	var vm = this;
  
  $http.get("json/list.json")
  .success(function(res){
    vm.tableParams = TableService.list(res);
  });
	
  $scope.vm = vm;
}]);