app.controller('ShotController', function($scope, dribbbleApi, $routeParams, $sce) { 
	
	//único shot
	var id = $routeParams.id;
    dribbbleApi.shot(id).then(function (data){
        $scope.shot = data.data;
		$scope.shot.description =  $sce.trustAsHtml($scope.shot.description);
		$scope.shot.created_at=new Date($scope.shot.created_at);
    });
	
});