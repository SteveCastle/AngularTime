'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('EmployeeList', ['$scope', function($scope) {
$scope.currentUser={'name': "Steve Castle", 'status': "Clocked In", 'isManager': true};
$scope.employees=[{"name":"Steve Castle", "department": "Creative", "title": "Manager", "status": "Clocked In"},{"name":"John Finley", "department": "Creative", "title": "Manager", "status": "At Lunch"}];
$scope.departments=[{"name":"Creative"},{"name":"Sales"}];
$scope.titles=[{"name":"Manager"},{"name":"Sales Guy"}];

$scope.clockIn = function(status){
$scope.currentUser.status=status;
$scope.currentUser.statusType="alert-success";
};
$scope.clockOut = function(status){
$scope.currentUser.status=status;
$scope.currentUser.statusType="alert-danger";
};

$scope.addEmployee = function(newName,newDepartment,newTitle){
var newEmployee = {"name":newName, "department": newDepartment, "title": newTitle, "status": "Out"};
$scope.employees.push(newEmployee);
};
  }])
  .controller('TimeCards', ['$scope',function($scope) {
$scope.employees=[{"name":"Steve Castle", "department": "Creative", "title": "Manager"},{"name":"John Finley", "department": "Sales", "title": "Manager"}];
$scope.departments=[{"name":"Creative"},{"name":"Sales"}];
$scope.titles=[{"name":"Manager"},{"name":"Sales Guy"}];
  }])
   .controller('SetUp', ['$scope',function($scope) {
$scope.departments=[{"name":"Creative"},{"name":"Sales"}];
$scope.titles=[{"name":"Manager"},{"name":"Sales Guy"}];
  }]) ;