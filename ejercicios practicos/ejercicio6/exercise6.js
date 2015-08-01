
function f1(){
$("ul li:odd").css("background","red");
}

function f2(){
$("ul li:nth-child(3n + 1 )").css("color","green");
}

function f3(){
$("ul li:first").css("font-size","40px");
$("ul li:nth-last-of-type(1)").css("font-size","40px");
}