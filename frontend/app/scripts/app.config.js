'use strict';
angular.module('dipApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider /*, $authProvider, API_URL*/ ) {

		$urlRouterProvider.otherwise('/');

		$stateProvider

			.state('main', {
				url: '/',
				templateUrl: '/views/main.html'
			})
			.state('jobs', {
				url: '/jobs',
				templateUrl: '/views/jobs.html',
				controller: 'JobsCtrl'
			})


		.state('register', {
				url: '/register',
				templateUrl: '/views/register.html',
				controller: 'RegisterCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: '/views/login.html',
				controller: 'LoginCtrl'
			})
			.state('logout', {
				url: '/logout',
				controller: 'LogoutCtrl'

			});

		/*$authProvider.google({
			clientId: '803487178833-qfmrpj8pm821tdrn0l671t57cqmr366j.apps.googleusercontent.com',
			url: API_URL + 'auth/google'
		})*/


		$httpProvider.interceptors.push('authInterceptor');
	})
	.constant('API_URL', 'http://localhost:3000/')
	.run(function ($window) {

		var params = $window.location.search.substring(1);

		if (params && $window.opener && $window.opener.location.origin === $window.location.origin) {
			var pair = params.split('=');
			var code = decodeURIComponent(pair[1]);

			$window.opener.postMessage(code, $window.location.origin);


		}

	});