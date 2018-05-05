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
        let query_string = 'INSERT INTO ' + table + ' SET ?';
        connection.query( query_string, dataToInsert,(err, results, fields) => {
            if(err){ 
                log(err);
            }else{
                log('query response', results);
                callback({id: results.insertId,  name: dataToInsert.name, devoured: 0});
            }
        });
    },
    updateOne: function( dataToUpdate, id, table, callback){
        let query_string = 'UPDATE ' + table + ' SET ? WHERE id = ?';
        connection.query( query_string, [dataToUpdate, id],(err, results, fields) => {
            if(err){ 
                log(err);
            }else{
                log('update response', results);
                callback(results);
            }
        });
    }
}

module.exports = orm;