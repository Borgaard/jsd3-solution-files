var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/parks.json').success(function(data) {
    $scope.parks = data;
    $scope.parkOrder = 'name';
  });
}]);

