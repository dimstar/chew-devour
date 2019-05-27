
require('dotenv').config();
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//         host     : 'localhost',
//         user     : 'root',
//         password : '',
//         database : 'burger_joint'
//       });
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.RDS_DB_NAME, process.env.RDS_USERNAME, process.env.RDS_PASSWORD, {
  host: process.env.RDS_HOSTNAME,
  dialect: process.env.RDS_DIALECT,
  pool: {
    max: 5,
    min: 0,
    aquire: 3000,
    idle: 1000
  },
});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
module.exports = sequelize;
