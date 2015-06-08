app.controller('ShotController', function($scope, dribbbleApi, $routeParams, $sce) { 
	
   //===========PRIVATE=========//
   
   //id do shot
   var id = $routeParams.id;
	
   //===========PUBLIC==========//
   
   //popula $scope.shot como os seus rescpectivos dados
    dribbbleApi.shot(id).then(function (data){
        $scope.shot = data.data;
		$scope.shot.description =  $sce.trustAsHtml($scope.shot.description); //permite renderizar tags html
		$scope.shot.created_at=new Date($scope.shot.created_at); //converte para data 
    });
	
});
