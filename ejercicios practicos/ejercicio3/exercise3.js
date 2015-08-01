$(document).ready(f1);


function f1(){

  $("#cajaParaCambiarDeAtributos").mouseover(f2);

}


function f2(){
$( "#cajaParaCambiarDeAtributos" ).before(" texto añadido.....").after( "otro...." ).css("color", "white").css("background","#DDAACC").css("text-size", "49px");

}
