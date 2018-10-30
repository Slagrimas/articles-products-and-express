//Route object that we can route our objects into
const express = require('express');
const router = express.Router();

const Products = require('../db/products.js');
const DB_Products = new Products();
// console.log('Products', Products);
// console.log('DB_Products', DB_Products);

//get to products index
router.get('/', (req, res) => {
  const products = DB_Products.all();
  if(products.length > 0) {
    res.render('index', { products })
  } else {
    const newProductPage = true;
    res.render('index', { newProductPage })
  }
})
//get to new products form
router.get('/new', (req, res) => {
  console.log('lets add a product shall we?')
  const addProduct = true;
  res.render('form', { addProduct })
})
//detailed view
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const holder = DB_Products.getProductById(id);
  console.log('holder', holder)
  res.render('product', holder);
})

//post new product
router.post('/new', (req, res) => {
  console.log('new product is posted')
  const newProd = req.body
  console.log('POOOOOOOOOOOOOOOOO', req.body)
  DB_Products.add(newProd)
  console.log('LLLLLLLLLLLLLL', DB_Products)
  // res.render('product', DB_Products.add(newProd))
})

router.put('/products', (req, res) => {
  console.log('Bingo Bango Put')
  res.render(DB_Products.add(req.body.name, req, res));
}) 
 
module.exports = router;