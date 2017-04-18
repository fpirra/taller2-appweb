define(['app.module'], function (app) {
    return app.controller('IndexCtrl', function ($scope, $rootScope, $http, $location) {
    	$scope.username = '';
    	$scope.password = '';

    	$scope.submit = function() {
    		if ($scope.username != '' && $scope.password != '') {
                $http.get('api/token.json').success(function(response) {
					$rootScope.token = response.token;
                    $location.url('/login');
                }).error(function(error) {
                    console.error("error login");
                });
            } else {
                alert("Ingresar username y password");
            }
    	}
    });
});