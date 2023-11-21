var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: '', 
   database: 'final'
}); 
db.connect(() => console.log('Connected data!'));
module.exports = db; 