var renderProduct = new Vue({
	el: '.main__view',
	data: data,
	mounted: function(){
		for(product of this.products){
			var title = product.title.toLowerCase();
			switch(title){
				case 'laptop':
					product.img = 'public/img/laptop.jpg';
					break;
				case 'tablet':
					product.img = 'public/img/tablet.jpg';
					break;
				case 'phone':
					product.img = 'public/img/phone.jpg';
					break;
			};
		}
	},
	updated: function(){
		this.loading = false;
	},
	methods: {
		sortContent: function(event){

			var btnAttr = event.target.title;
			var list = this.products;
			var load = false;

			switch(btnAttr){
				case 'price':
					this.loading = true;
					setTimeout(function(){
						list.sort(function(a, b){
							return a.price - b.price;
						});
					}, 700);
					break;
				case 'weight':
					this.loading = true;
					setTimeout(function(){
						list.sort(function(a, b){
							return a.weight - b.weight;
						});
					}, 700);
					break;
				case 'color':
					this.loading = true;
					setTimeout(function(){
						list.sort(function(a, b){
							return (a.color.text > b.color.text) ? 1 : ((b.color.text > a.color.text) ? -1 : 0);
						});
					}, 700);
					break;
			};
		}
	}
});