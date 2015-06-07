app.controller('MainController', function($scope, $http) { 
  
  
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
