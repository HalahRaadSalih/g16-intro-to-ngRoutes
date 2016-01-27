var app = angular.module('app', ['ngRoute']);

app.controller('myController', function($scope){

});


app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/home.html',
    controller: "HomeController"
  })
    .when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'DdogsController'
    })
});


app.controller('HomeController', function($scope){
  console.log('HomeController');
});

app.controller('DogsController', function($scope){
  console.log('Dogs Controllers');
});
