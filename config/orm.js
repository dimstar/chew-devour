const connection = require('./connection.js');
const log = console.log;
//dataToDowWhats should be key value pairs of sql column=value

let orm = {
    selectAll: function(table, callback){
        let queryString = 'SELECT * FROM ??;'
        connection.query(queryString, table, (err, results, fields) => {
            if(err){ 
                log(err);
            }else{
                log('query response', results);
                callback(results);
            }
        });
    },
    insertOne: function(dataToInsert, table, callback){
        let col_arr = Object.keys(dataToInsert);
        let query_string = 'INSERT INTO ' + table + ' SET ?';
        connection.query( query_string, dataToInsert,(err, results, fields) => {
            if(err){ 
                log(err);
            }else{
                log('query response', results);
                callback(results.insertId);
            }
        });
    },
    updateOne: function(dataToUpdate, id, table, callback){

    },
    deleteOne: function(id, callback){

    }
}

module.exports = orm;