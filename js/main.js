var app = angular.module('Products', ['ui.bootstrap','ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ProductList',
      templateUrl:'partials/list.html'
    })
    .when('/Product/:projectId', {
      controller:'Product',
      templateUrl:'partials/Products.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
