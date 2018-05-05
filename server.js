// ORM example /Users/kylemagee/Documents/webapps/vvv/www/codebcamp/htdocs/class-repo/01-Class-Content/14-handlebars/01-Activities/12-OrmExample
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./config/routes.js');
const PORT = process.env.PORT || 1985;

const app = express();

//body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// middle ware the pub folder
app.use(express.static('public'));

router.init(app);

//listen
app.listen( PORT, () => console.log(`Rolling on PORT: ${PORT}!`))