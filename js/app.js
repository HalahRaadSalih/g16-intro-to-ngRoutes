var app = angular.module('app', ['ngRoute']);

app.controller('myController', function($scope, $http){
  $http.get('https://api.github.com/zen').then(function(response){
    $scope.zenData = response.data;
    console.log(response.data);
  });
});


app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/home.html',
    controller: "HomeController"
  })
    .when('/dogs', {
      templateUrl: 'partials/dogs.html',
      controller: 'DogsController'
    })
    .when('/number/:first', {
      templateUrl: 'partials/numbers.html',
      controller: 'NumbersController'
    })
    .otherwise({
      redirect: '/'
    });

    $locationProvider.html5Mode(true);
});


app.controller('HomeController', function($scope){
  console.log('HomeController');
});

app.controller('DogsController', function($scope){
  console.log('Dogs Controllers');
});


app.controller('NumbersController', function($scope, $routeParams, $location){
  debugger;
});
