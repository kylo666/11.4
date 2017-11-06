function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
  
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}


	var a = new Phone('apple', '500', 'red');
  var b = new Phone('Samsung Galaxy S6', '600', 'black');
  var c = new Phone('OnePlus One', '700', 'silver');


a.printInfo();
b.printInfo();
c.printInfo();