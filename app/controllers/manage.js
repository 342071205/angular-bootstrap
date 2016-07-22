'use strict';

angular.module('angu.manage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/manage', {
    templateUrl: 'views/manage/index.html',
    controller: 'ManageIndexCtrl'
  })
  .when('/manage/add',{
  	templateUrl: 'views/manage/add.html',
    controller: 'ManageAddCtrl'
  })
  .when('/manage/edit/:id',{
  	templateUrl: 'views/manage/edit.html',
    controller: 'ManageEditCtrl'
  });
}])

.controller('ManageIndexCtrl', ['TableService', '$scope', function(TableService, $scope) {
	var vm = this;
	var data = [{id: "1", name: "Moroni", age: 50},{id: "2", name: "Aoroni", age: 52},
  {id: "11", name: "Moroni", age: 50},{id: "12", name: "Aoroni", age: 52},
  {id: "21", name: "Moroni", age: 50},{id: "22", name: "Aoroni", age: 52},
  {id: "31", name: "Moroni", age: 50},{id: "32", name: "Aoroni", age: 52},
  {id: "41", name: "Moroni", age: 50},{id: "42", name: "Aoroni", age: 52},
  {id: "51", name: "Moroni", age: 50},{id: "52", name: "Aoroni", age: 52},
  {id: "61", name: "Moroni", age: 50},{id: "62", name: "Aoroni", age: 52}];
	vm.tableParams = TableService.list(data);

  vm.removeIt = function(id){
    alert("delete id: "+id);
  };

	$scope.vm = vm;
}])

.controller('ManageAddCtrl', ['$scope', function($scope) {
	
}])

.controller('ManageEditCtrl', ['$routeParams', '$scope',  function($routeParams, $scope) {
	$scope.vm = this;
	$scope.vm.id = $routeParams.id;
}]);