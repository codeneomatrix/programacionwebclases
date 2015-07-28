
function ocultar(){


$("td").each(function(){

	if ( $(this).text() == "" ) {
      console.log("vacio");
      $(this).css("background","yellow") 
    }

});


}