define([
		'angular', 
		'jquery', 
		'bootstrap', 
		'material', 
		'material-kit', 
		'angular-route'
	], function (angular) {
	var app = angular.module('UnderFyApp', ['ngMaterial', 'ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: 'views/index/indexView.html', 
            controller: 'IndexCtrl'
        }).
        when("/login", {
            templateUrl: 'views/index/loginView.html', 
            controller: 'IndexCtrl'
        }).
        otherwise({redirectTo:'/'});

    });

	app.init = function () {
		angular.bootstrap(document, ['UnderFyApp']);
	};

	return app;
});