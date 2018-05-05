const burgerController = require('../controllers/burgersController.js');
const exphbs = require('express-handlebars');

module.exports = {
    init: function(app){
        // handlebar middleware
        app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        // begin the actual routing and handoff to the views
        app.get('/', this.all );
        // @todo a post
        app.post('/burger', this.create );
        // @todo a put
        app.put('/burger/:id', this.update );
    },
    all: function(request, response){
        burgerController.all(function(renderData){
            response.render('index', renderData);
        })
        
        // response.send('Hello!');
    },
    create: function(request, response){
        burgerController.create( request.body, function(jsonData){
            // this is not from doc, but we trying it!
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(jsonData));
        });
    },
    update: function(request, response){},
}