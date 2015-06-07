
//===== dribbble service =====//
describe('Verificando service dribbble ', function(){

	it('api deveria carregar', function(){

		myTestFunction = function(aService){
			expect(aService).toBeDefined();
		}

		myTestFunction.$inject = [ 'dribbble' ];
		var myInjector = angular.injector([ 'ConcreteApp' ]);
		myInjector.invoke( myTestFunction );
	})

});

/*
//===== MainController =====//
describe('Verificando MainController', function() {
  beforeEach(module('ConcreteApp'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('funções deveriam estar definidas', function() {
	  var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
	  expect($scope.mobileMenu).toBeDefined();
   });	
  
});

*/
