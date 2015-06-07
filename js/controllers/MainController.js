app.controller('MainController', ['$scope','dribbble', function($scope,dribbble) { 
	
	
//===========PUBLIC==========//
	
	//função que esconde elemento olhando para os pais
	$scope.hideByClassName=function($event,tagClass){
		var element=$event.target; // DOM
		
		while (element.parentNode) {//enquanto existir pais
        element = element.parentNode;
			if (element.className === tagClass){ //se achar pai igual a classe citada
				element.style.display="none"; //esconde este elemento
				return true;
			}	
		}
		return false;
	};
	
	
	$scope.pagination = {
		activePage:1,
		maxPage:10,
		setActivePage:function(newActivePage){
			this.activePage=newActivePage;
		}
	};
	
	//listagem de todos
	var list = "popular";
    dribbble.list(list).then(function (data){
        $scope.list = data.data;
		console.log($scope.list);
    });
	
	//único shot
	var id = 2093317;
    dribbble.shot(id).then(function (data){
        $scope.shot = data.data;
    });
	
	
	//paginar
	$scope.nextPage = function(refPage){
		var newActivePage = parseInt($scope.list.page) + refPage;
        dribbble.list(list, {page: newActivePage }).then(function(data) {
			if(newActivePage<=0) return false;
			$scope.pagination.setActivePage( newActivePage );
			console.log($scope.list);
            $scope.list.page = data.data.page;
			$scope.list.shots = data.data.shots;
        });
    }
	
	
//===========PRIVATE=========//
  
}]);