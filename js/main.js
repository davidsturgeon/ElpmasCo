var app = angular.module('Products', ['ui.bootstrap','ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'productList',
      templateUrl:'partials/list.html'
    })
    .when('/Product/:projectId', {
      controller:'product',
      templateUrl:'partials/Products.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
