'use strict';

/* Controllers */

angular.module('myApp.controllers', ['firebase']).
  controller('EmployeeList', ['$scope','$firebase', function($scope, $firebase) {
  $scope.currentUser={'name': "Steve Castle", 'status': "Clocked In", 'isManager': true};
  var ref = new Firebase('https://angular-clock.firebaseio.com/employees');
  $scope.employees = $firebase(ref.limit(15));
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
$scope.employees.$add(newEmployee);
};
  }])
  .controller('TimeCards', ['$scope','$firebase',function($scope, $firebase) {
  var ref = new Firebase('https://angular-clock.firebaseio.com/employees');
  $scope.employees = $firebase(ref.limit(15));$scope.departments=[{"name":"Creative"},{"name":"Sales"}];
$scope.titles=[{"name":"Manager"},{"name":"Sales Guy"}];
  }])
   .controller('SetUp', ['$scope',function($scope) {
$scope.departments=[{"name":"Creative"},{"name":"Sales"}];
$scope.titles=[{"name":"Manager"},{"name":"Sales Guy"}];
  }]) ;