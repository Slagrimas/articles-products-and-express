const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const productRoutes = require('./routes/products.js');
const articleRoutes = require('./routes/articles.js');

const Products = require('./db/products.js');
// const DB_Products = new Products(); 
const Articles = require('./db/articles.js');
// const DB_Articles = new Articles();

//Tells Express to use a static directory that we define as the location to look for requests
app.use(express.static("public"));

//SMOKE TEST WORKING//
// app.get('/', (req, res) => {
//   res.send('Smoke-Test')
// })


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})