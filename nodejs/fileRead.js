var fs = require('fs');

 fs.writeFileSync('index.txt',"HELLO WORLD HOW ARE YOU");

 

 fs.appendFileSync('index.txt',"THIS IS APPEND",function(err){
    if(err)throw err;
    console.log(fs.readFileSync("index.txt",'utf-8'));
 });

 var readFIle = fs.readFileSync('index.txt','utf-8');
 console.log(readFIle);
