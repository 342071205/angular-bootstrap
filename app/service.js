'use strict';

angular.module('angu.service', ['ngTable'])

.service('TableService', ['NgTableParams', function(NgTableParams){
  this.list = function(data){
    return new NgTableParams({}, {dataset: data});
  };
}]);