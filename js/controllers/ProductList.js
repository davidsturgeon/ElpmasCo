console.log('Add the ProductList Controller')
app.controller('ProductList', ['$scope', 'productFactory', function($scope,productFactory) {
	$scope.productRows = [];
	productFactory.getProducts().success(function(data){
		$scope.products = data.products;
		var i,j,temparray,chunk = 3;
		for (i=0,j=$scope.products.length; i<j; i+=chunk) {
		    temparray = $scope.products.slice(i,i+chunk);
		    $scope.productRows.push(temparray);
		}
		$scope.myInterval = 5000;
		var slides = $scope.slides = [];
		  $scope.addSlide = function() {
		    slides.push({
		      image: 'http://lorempixel.com/800/400/people/'+slides.length % 4,
		      text: ['Sam Doe','Alex Doe','Skyler Doe','Casey Doe'][slides.length % 4]
		    });
		  };
		  for (var i=0; i<4; i++) {
		    $scope.addSlide();
		  }
		
	});
}]);