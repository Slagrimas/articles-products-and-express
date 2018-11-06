require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

const productRoutes = require('./routes/products.js');
const articleRoutes = require('./routes/articles.js');

//Tells Express to use a static directory that we define as the location to look for requests
app.use(express.static("views"));

//For parsing application/x-www-form-urlencoded. Returns the already parsed information/object as "req.body".
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productRoutes);
// app.use('articles', articleRoutes);

//Creates a super simple Express app; basic way to register a Handlebars view engine
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//Setup for method-override
app.use(methodOverride('_method'));

// //Using Express router to access products and articles routes
// app.use('/', productRoutes);
// // app.use('/', articleRoutes);

app.listen(PORT, () => {
  console.log(`Started app on port: ${PORT}`);
});