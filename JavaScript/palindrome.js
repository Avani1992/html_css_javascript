var x="naman"
var str=""
for(var i=x.length-1;i>=0;i--){
    str=str+x.charAt(i);
}
if(x==str){
    document.write("Palindrome");
}else{
    document.write("Not Palindrome");
}

x.charAt