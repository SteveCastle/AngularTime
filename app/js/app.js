'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clock', {templateUrl: 'partials/partial1.html', controller: 'EmployeeList'});
  $routeProvider.when('/cards', {templateUrl: 'partials/partial2.html', controller: 'TimeCards'});
  $routeProvider.otherwise({redirectTo: '/clock'});
}]);
