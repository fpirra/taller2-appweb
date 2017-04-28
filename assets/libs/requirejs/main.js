require.config({
	baseUrl: '',
	paths: {
        'angular' : 'assets/libs/angularjs/angular.min',
        //'angular-animate' : 'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min',
        //'angular-aria' : 'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min',
        //'angular-messages' : 'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min',
        //'angular-material' : 'http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js',
        'angular-route' : 'assets/libs/angular-route/angular-route',
        'app.module' : 'app.module',
        'jquery' : 'assets/libs/jquery/jquery.min',
        'bootstrap' : 'assets/libs/bootstrap/bootstrap.min',
        'material' : 'assets/libs/material/material.min',
        'material-kit' : 'assets/libs/material/material-kit',
        'index-controller' : 'views/index/indexCtrl',
    },
    shim: {
        'bootstrap' : { deps :['jquery'] },
        'material' : { deps :['bootstrap'] },
        'material-kit' : { deps :['material'] },
        'angular' : {
            exports : 'angular'
        },
        'angular-route' : {deps: ['angular']}
    }
	// paths: {
	// 	'angular' : ''
	// }
	// ["assets/libs/angular.min"], function(angular) { console.log("angular cargado!"); }
});

require(['app.module', 'index-controller'], function (app) {
	app.init();
});