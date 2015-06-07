app.controller('ShotController', function($scope, dribbbleApi, $routeParams, $sce) { 
	
	//===========PRIVATE=========//
	var id = $routeParams.id;
	
	//===========PUBLIC==========//
	//único shot
    dribbbleApi.shot(id).then(function (data){
        $scope.shot = data.data;
		$scope.shot.description =  $sce.trustAsHtml($scope.shot.description);
		$scope.shot.created_at=new Date($scope.shot.created_at);
    });
	
});