const burgerController = require('../controllers/burgersController.js');
const exphbs = require('express-handlebars');

module.exports = {
    init: function(app){
        // handlebar middleware
        app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        app.get('/', this.all );
    },
    all: function(request, response){
        burgerController.all(function(renderData){
            response.render('index', renderData);
        })
        
        // response.send('Hello!');
    },
    create: function(request, response){},
    update: function(request, response){},
}