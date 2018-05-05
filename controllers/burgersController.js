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
    create: function( inputData, cb){
        burgers.create( inputData, ( data)=>{
            cb(data);
        });
    },
    update: function( updateData, id, cb){
        burgers.update( updateData, id, (data)=>{
            cb(data);
        })
    }
}