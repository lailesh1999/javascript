var s = "lailesh";
var c = s.split('');
for(var i =0;i<c.length;i++){
    var f =0;
    for(var j=i+1;j<c.length;j++){
        if(c[i] == c[j]){
            c[j] = ' ';
            f=1;
        }
        if(f == 1){
            c[i] = ' ';
        }
    }
}
var ans=" ";
for(var i=0;i<c.length;i++){
    if(c[i] != ' '){
    ans = ans + c[i];
    }
}
console.log(ans);