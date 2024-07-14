function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  Product.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  };
  
  
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
  }
  
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now ON.`);
  };
  
  Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now OFF.`);
  };
  
  function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
  }
  
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  Clothing.prototype.tryOn = function() {
    console.log(`Trying on ${this.size} size ${this.material} ${this.name}.`);
  };
  
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
  }
  
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  Books.prototype.read = function() {
    console.log(`Reading "${this.name}" by ${this.author}.`);
  };
  
  
  const laptop = new Electronics("Laptop", 1200, 10, "Dell", "Inspiron");
  const shirt = new Clothing("T-Shirt", 20, 50, "L", "Cotton");
  const book = new Books("JavaScript: The Good Parts", 15, 30, "Douglas Crockford", "Programming");
  
  laptop.displayInfo(); 
  laptop.powerOn(); 
  laptop.powerOff();
  
  shirt.displayInfo(); 
  shirt.tryOn(); 
  
  book.displayInfo(); 
  book.read();
  