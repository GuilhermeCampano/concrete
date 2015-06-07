app.controller('ShotController', function($scope, dribbble, $routeParams, $sce) { 
	
	//único shot
	var id = $routeParams.id;
    dribbble.shot(id).then(function (data){
        $scope.shot = data.data;
		$scope.shot.description =  $sce.trustAsHtml($scope.shot.description);
    });
	
});