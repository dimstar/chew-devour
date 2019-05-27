  // ORM example /Users/kylemagee/Documents/webapps/vvv/www/codebcamp/htdocs/class-repo/01-Class-Content/14-handlebars/01-Activities/12-OrmExample
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./config/routes.js');
// @todo implement production/dev environment

let env = process.env.NODE_ENV || "development";
 

// @todo think about json referencing like this
/**
 * let config = require(__dirname + "../config/congig.json")[env];
 */
const PORT = process.env.PORT || 1985;

const app = express();

//body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// middle ware the pub folder
app.use(express.static('public'));

// @todo This is backwards! do this instead
/**
 * Pass the app directly into the router!
 * const router = require('./config/routes.js')(app);
 * ----------
 * module.exports = function(app){ return 'the goods';}
 */
router.init(app);

//listen
app.listen( PORT, () => console.log(`Rolling on PORT: ${PORT}!`))