
var app = angular.module('ConcreteApp',['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/shot/:id', {
        templateUrl: 'js/partials/shot.html',
        controller: 'ShotController'
	})
    .when('/:list', {
        templateUrl: 'js/partials/popular.html',
        controller: 'ShotsController',
		resolve: {
            shotsApi: function (dribbble) {
				dribbble.list(list).then(function (data){
                    return data;
               });
            }
		}
    })
    .otherwise({
        redirectTo: '/popular'
    });
}]);
 
