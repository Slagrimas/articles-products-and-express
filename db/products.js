class Products {
  constructor() {
    this._count = 1;
    this._productStorage = [{
      name: 'toyota tacoma',
      price: 42000,
      inventory: 28
    }, 
    {
      name: 'toyota 4runner',
      price: 56000,
      inventory: 20
    }, 
    {
      name: 'toyota tundra',
      price: 62000,
      inventory: 4
    }];
    
  }

  //Methods
  all() {
    return this._productStorage;
  }

  add(Product) {
    console.log('!!!!!!!!!!!!!', Product)
    Product.name = this._count;
    this._productStorage.push(Product);
    this._count++;
    return Product.name;
  }

}

module.exports = Products;