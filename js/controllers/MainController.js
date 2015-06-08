app.controller('MainController', function($scope, $http) { 
  
  //função para  abrir e fechar menu mobile
  $scope.mobileMenu = {
	
	mobileMenu : document.getElementById("mobile-demo"),
	open : function(){
		this.mobileMenu.setAttribute("class", "side-nav active");
	},
	close : function(){
		this.mobileMenu.setAttribute("class", "side-nav");
	},
  }
  
  
});
