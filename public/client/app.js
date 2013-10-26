angular.module('shortlyApp', [])
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller:'indexCtrl',
    templateUrl:'/templates/index.html'})
  .when('/create', {
    controller:'createCtrl',
    templateUrl:'/templates/create.html'})
  .otherwise({
    redirectTo: '/'
  });
})
.controller('indexCtrl',function($scope, $http){
  $scope.name = "Pieter";
  $http.get('/links')
  .success(function(data, status, headers, config){
    console.log('SUCCESS!');
    $scope.links = data;
  })
  .error(function(data, status){
    console.log('Error');
  });
})
.controller('createCtrl', function($scope, $http){
  $scope.data = {
    urlRoot: '/links'
  };
  $scope.shorten = function(){
    console.log("data.url is:", $scope.data.url);
    $http.post('/links', $scope.data)
    .success(function(data, status, headers, config){
      console.log('SUCCESS!');
    })
    .error(function(data, status){
      console.log('Error');
    });
  };
})
.controller('searchCtrl', function($scope) {
  $scope.updateSearch = function(event) {
    console.log($scope.searchBox);
  };
});