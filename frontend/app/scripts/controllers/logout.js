'use strict';

angular.module('dipApp')
    .controller('LogoutCtrl', function (authToken, $state) {
        authToken.removeToken();
        $state.go('main');
    });