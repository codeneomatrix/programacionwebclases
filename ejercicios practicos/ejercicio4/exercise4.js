$(document).ready(f1);


function f1(){

  $("div").hover(f2,f3);

}


function f2(){
$( this ).css("color", "white").css("background","#DDAACC").css("color","red");
$("p").css("color", "white").css("background","#DDAACC").css("opacity", "2").css("color","red");
}

function f3(){
$( this ).css("color", "white").css("background","white").css("color","rgb(140,200,100)");
$( "p" ).css("color", "white").css("background","white").css("opacity", "0.3").css("color","rgb(140,200,100)");
}