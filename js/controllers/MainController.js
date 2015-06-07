app.controller('MainController', function($scope, $http) { 
  
  
  $scope.mobileMenu = {
	
	mobileMenu : document.getElementById("mobile-demo"),
	active : function(){
		this.mobileMenu.setAttribute("class", "side-nav active");
	},
	close : function(){
		this.mobileMenu.setAttribute("class", "side-nav");
	},
  }
  
  
});
