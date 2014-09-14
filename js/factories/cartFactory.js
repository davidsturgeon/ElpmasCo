console.log('Add Checkout Factory')
app.factory('cartFactory', ['productFactory','$q',function(productFactory,$q) { 
	var factory = {};
	factory.cart = [];
	factory.itemsInCart = 0;
	factory.updateItemsInCart = function() {
		var items = 0;
		factory.cart.forEach(function(element){
			items += element.quanity;
		});
		factory.itemsInCart = items;
		console.log('itemsInCart',factory.itemsInCart)
	}
	factory.addItem = function(productId) {
		//check for existance in cart
		var index = -1;
		factory.cart.some(function(entry, i) {
		    if (entry.id === productId) {
		        index = i;
		        return true;
		    }
		});

		if( index > -1 ) {
			//item already in cart just increase the quanity
			factory.cart[index].quanity++;
		} else  {
			factory.cart.push({"id":productId,"quanity":1});
		}
		factory.updateItemsInCart();
		console.log('Cart',factory.cart)
	}
	factory.removeItem = function(productId) {
		var index = -1;
		factory.cart.some(function(entry, i) {
		    if (entry.id === productId) {
		        index = i;
		        return true;
		    }
		});
		if (index > -1) {
			factory.cart.splice(index, 1);
		}
		factory.updateItemsInCart();
	}

   return factory;
}]);