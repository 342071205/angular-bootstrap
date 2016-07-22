'use strict';

angular.module('angu.http', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/http', {
    templateUrl: 'views/http.html',
    controller: 'HttpIndexCtrl'
  });
}])

.controller('HttpIndexCtrl', ['$scope', '$http', function($scope, $http) {
	var vm = this;
	vm.getLog = '';
	vm.getLog2 = '';
	vm.postLog = '';
	vm.postLog2 = '';
	$scope.vm = vm;

	vm.get = function(){
		$http.get('php/get.php?param1=test&param2=text')
		.success(function(res){
			vm.getLog += '$http.get():  ---->    '+JSON.stringify(res);
		});

		$http({method:'get',url:'php/get.php?param1=test&param2=text'})
		.then(function(res){
			vm.getLog2 += '$http({method:"get",url:""}): ---->    '+JSON.stringify(res);
		},function(err){

		});
	};

	vm.post = function(){
		$http.post('php/post.php',{param1: 'test', param2: 'text'})
		.success(function(res){
			vm.postLog += '$http.post():  ---->    '+JSON.stringify(res);
		});

		$http({method:'post',url:'php/post.php',data: {'param1': 'test', 'param2': 'text'}})
		.then(function(res){
			vm.postLog2 += '$http({method:"post",url:""}): ---->    '+JSON.stringify(res);
		},function(err){

		});
	};

}]);