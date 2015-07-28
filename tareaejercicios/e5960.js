
function f1(){
$("[name=saludo]").css("color","red");
}

function f2(){$("[href$='.com']").css("color","yellow");}


function f2a(){


$("*").each(function(){

	if ( $(this).attr("href") == "algo.com" ) {
      $(this).css("color","yellow")
    }

});

}


/*
$("*").each(function(){

	($(this).attr("href")).search(".com");

      });


($("a").attr("href")).search(".com");*/
