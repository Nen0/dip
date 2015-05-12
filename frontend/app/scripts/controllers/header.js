'use strict';

angular.module('dipApp')
    .controller('HeaderCtrl', function ($scope, authToken) {
        $scope.isAuthenticated = authToken.isAuthenticated;

    });