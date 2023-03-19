var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

//sql = "create database dd";

// con.query(sql,function(err,result){
//     if(err)throw err;
//     console.log("database created");
// })

// sql = "insert into dd.student values(1,'lailesh')";

// con.query(sql,function(err,result){
//     if(err) throw err;
//     console.log(result.affectedRows);
// })

// sql = "insert into dd.student values ?";
// values = [[2,'aaa'],[3,'bb'],[4,'dd']];
// con.query(sql,[values],function(err,result){
//     if(err) throw err;
//     console.log(result.affectedRows);
// })


sql = "select * from dd.student";
con.query(sql,function(err,result){
    if(err) throw err;
    console.log(result.);
})