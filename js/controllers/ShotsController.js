app.controller('ShotsController', function($scope, $routeParams, dribbbleApi){ 


	
	
	//recebe valores para filtro (popular, estreias, todos)
	var list = $routeParams.list;
	
	
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
	
	//Chamar api apos carregar pagina
	dribbbleApi.list(list).then(function (data){
		$scope.list = data.data;
	});
	
	
	//objeto usada como referência para fazer a paginação
	$scope.pagination = {
		activeList:list,
		activePage:1,
		maxPage:50,
		setActivePage:function(newActivePage){
			this.activePage=newActivePage;
		}
	};
	
	
	//função que executa paginação
	$scope.nextPage = function(refPage){
		var newActivePage = parseInt($scope.list.page) + refPage;
        	dribbbleApi.list(list, {page: newActivePage }).then(function(data) {
			if(newActivePage<=0) return false;
			$scope.pagination.setActivePage( newActivePage );
	            	$scope.list.page = data.data.page;
			$scope.list.shots = data.data.shots;
        	});
	}
	
	

  
});
