var str = "hello world how are you";
var str1 = str.split(" ");
var out = " ";
var Final="";
for(var i =0; i<str1.length;i++){
    var s = str1[i];
    for(var j =0;j<s.length;j++){
        if(j == 0){
            out = out + s[j].toUpperCase();
        }
        else{
            out = out + s[j];
        }
        
    }
    Final = Final + out + " ";
    out = " ";
}
console.log(Final);