
// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
  //Database is on JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  //Database is local
  connection = mysql.createConnection({
    username: "x73ofb1vwpnh3hwj",
    password: "oabg7u3y11t6y2xn",
    database: "l9rd8p9kuvyzlzmf",
    host: "w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
  });
} 
console.log ("test");

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;