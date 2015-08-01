$(document).ready(f1);


function f1(){

  $("article").dblclick(f2);
  $("div").hover(f3);

}


function f2(){
//reventar a div en 10seg
$("div").effect('explode',1000);
}

function f3(){
//revotar a article en 3seg
$("article").effect('bounce',{times:5},300);
}