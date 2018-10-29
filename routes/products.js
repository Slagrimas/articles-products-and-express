//Route object that we can route our objects into
const express = require('express');
const Router = express.Router();

const Products = require('../db/products.js');
const DB_Products = new Products();


