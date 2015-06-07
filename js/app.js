
var app = angular.module('ConcreteApp',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/shot/:id', {
        templateUrl: 'js/partials/shot.html',
        controller: 'ShotController',
		resolve: {
            dribbbleApi : function ($http, dribbble ) {
				return dribbble;
            }
		}
	})
    .when('/:list', {
        templateUrl: 'js/partials/popular.html',
        controller: 'ShotsController',
		resolve: {
            dribbbleApi : function ($http, dribbble ) {
				return dribbble;
            }
		}
    })
    .otherwise({
        redirectTo: '/popular'
    });
}]);
 
