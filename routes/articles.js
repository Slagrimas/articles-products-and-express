//Route object that we can route our objects into
const express = require('express');
const Router = express.Router();

const Articles = require('../db/articles.js');
const DB_Articles = new Articles();
