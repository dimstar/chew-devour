const orm = require('../config/orm.js');
const log = console.log;

module.exports = {
    all: function(callback){
        orm.selectAll( 'burgers', function(ormResponse){
            log('orm response: ', ormResponse);
            callback(ormResponse);
        })
    },
    create: function(data, callback){

    },
    update: function(data, id, callback){

    }
}