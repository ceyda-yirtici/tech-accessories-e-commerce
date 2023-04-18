var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    pass:"emre"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connection succesful");
})