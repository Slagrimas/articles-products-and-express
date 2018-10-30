//Route object that we can route our objects into
const express = require('express');
const router = express.Router();

const Products = require('../db/products.js');
const DB_Products = new Products();


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


//post new product
router.post('/new', (req, res) => {
  console.log('new product is posted')
  const newProd = req.body
  DB_Products.add(newProd)
  res.redirect('/')
})

// // get to the deets // NOT WORKING
// router.get("/:id", (req, res) => {
// const  id  = req.params;
// const getDeets = getElementById(name);
// res.render('products', getDeets);
// })

//get the router edit form
router.get('/:id/edit', (req, res) => {
  
})


module.exports = router;