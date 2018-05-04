const burgers = require('../models/burger.js');
const log = console.log;

module.exports = {
    all: function(cb){
        burgers.all((data)=>{
            log('burger data: ', data);
            let handlebars = {
                burgers: data
            }
            cb(handlebars);
        });
    },
    create: function(){},
    update: function(){}
}