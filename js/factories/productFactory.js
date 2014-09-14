console.log('Add Product Factory')
app.factory('productFactory', ['$http','$q',function($http,$q) { 
	var factory = {};
	factory.getProducts = function() {
		return $http.get('json/products.json');
	}
	factory.getProductById = function(id) {
		var deferred = $q.defer();
		$http.get('json/products.json').success(function(data){
			for(var i = 0; i<data.products.length; i++){
				if(data.products[i].id == id) {
					console.log(data.products[i])
					deferred.resolve(data.products[i]);
				}
			}
			deferred.resolve();
		});
		return deferred.promise;
	}
   return factory;
}]);