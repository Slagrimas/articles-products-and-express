//Route object that we can route our objects into
const express = require('express');
const router = express.Router();
const db = require('../knex/knex');

const support = require('../db/products.js');
// const DB_Products = new Products();
// console.log('Products', Products);
// console.log('DB_Products', DB_Products);

//get to products index
router.get('/', (req, res) => {
  support.selectAllProducts(req, res);
});
  // if (products.length > 0) {
  //   res.render('index', { products })
  // } else {
  //   const newProductPage = true;
  //   res.render('index', { newProductPage })
  // }

//get to new products form
// router.get('/new', (req, res) => {
//   console.log('lets add a product shall we?')
//   const addProduct = true;
//   res.render('form', { addProduct })
// })
// //detailed view
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   const holder = DB_Products.getProductById(id);
//   res.render('product', holder);
// })

// //post new product
// router.post('/new', (req, res) => {
//   console.log('new product is posted')
//   const newProd = req.body
//   const dataBase = DB_Products.add(newProd)
//   res.redirect('/products')
// })

// //get to edit
// router.get('/:id/edit', (req, res) => {
//   console.log('its editing time');
//   const { id } = req.params;
//   console.log('this is the id', req.params)
//   const editProd = DB_Products.getProductById(id);
//   console.log('editprod', editProd)
//   res.render('edit', editProd)
// });


// // router.put('/:id', (req, res) => {
// //   console.log('reqqqqqqqqqqqqq', req.body)
// //   Products.updateProd(req, res);
// // });


module.exports = router;