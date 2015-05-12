'use strict';

/**
 * @ngdoc function
 * @name dipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dipApp
 */
angular.module('dipApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
