// class Products {
//   constructor() {
//     //     // this._count = 4;
//     //     // this._productStorage = [{
//     //     //   id: 1,
//     //     //   name: 'toyota tacoma',
//     //     //   price: 25000,
//     //     //   inventory: 28
//     //     // },
//     //     // {
//     //     //   id: 2,
//     //     //   name: 'toyota 4runner',
//     //     //   price: 35000,
//     //     //   inventory: 20
//     //     // },
//     //     // {
//     //     //   id: 3,
//     //     //   name: 'toyota tundra',
//     //     //   price: 31500,
//     //     //   inventory: 4
//     //     // }];
//   }


  //   //Methods
  //   all() {
  //     return this._productStorage;
  //   }

  //   getProductById(id) {
  //     return this._productStorage.filter(product => {
  //       return parseInt(id) === product.id
  //     })[0];
  //   }

  //   add(Product) {
  //     // console.log('!!!!!!!!!!!!!', Product)
  //     this._productStorage.push(Product);
  //     // console.log('AAAAAAAAAAAAAAAAAAAA', this._productStorage);
  //     return Product.name;
  //   }
  //   updateProductById(id) {
  //     product.id = this._count;
  //   }
// }

const db = require('../knex/knex')
function selectAllProducts(req,res){
  db.select().from('products')
    .then(products => {
      res.render('index', {
        product: products.rows
      });
    })
    .catch(err => {
      console.log('!!!!!!!!!', err);
      res.send('there has been an error');
    })
}



module.exports = {
  selectAllProducts
};