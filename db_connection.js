var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "",
    database: "expressdb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");

    /*
    *   Create Database
    */
    /*
    var sql = "CREATE DATABASE expressdb"
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Database expressdb created")
    });
    */
    
    /*
    * Create Table
    */
    // var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
    // con.query(sql, function(err, result){
    //     if (err) throw err;
    //     console.log("Table users created !");
    // });

    /*
    * Insert Data
    */
});