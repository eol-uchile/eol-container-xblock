/*
       _=,_
    o_/6 /#\
    \__ |##/
     ='|--\
       /   #'-.
       \#|_   _'-. /
        |/ \_( # |" 
       C/ ,--___/
*/

function EolContainerXBlock(runtime, element, settings) {

    $(function ($) {
		if(settings.type == "Respuesta") {
			$('#' + settings.type + settings.location +' .expmid').toggle();
		}

		MathJax.Hub.Queue(["Typeset", MathJax.Hub]); //Reconstruir latex
    });
}

function toggleContainer(type, id) {
	var elemento = $('#' + type + id +' .expbot');

	if (elemento.hasClass("toggle")) 	{
		elemento.removeClass("toggle");
	}
	else {
		elemento.addClass("toggle");
	}

	$("body, html").stop(true,true);
	$("body, html").animate({ 
        scrollTop: $('#' + type + id).offset().top 
    }, 1000);
	$('#' + type + id +' .expmid').animate({
		height: "toggle"
	},1000);
}


function toggleContainerMedia(type, id) {
	var elemento = $('#' + type + id +' .expbot');
	var elemento2 = $('#' + type + id );
	var elemento3 = $('#' + type + id +' .expmid');

	if (elemento.hasClass("toggle")) 	{
		elemento.removeClass("toggle");
	}
	else {
		elemento.addClass("toggle");
	}

	$("body, html").stop(true,true);
	$("body, html").animate({ 
        scrollTop: elemento2.offset().top 
    }, 1000);
	elemento3.animate({
		height: "toggle"
	},1000, function(){
		console.log("fin");
		if (elemento.hasClass("cerrado")) 	{
			elemento.removeClass("cerrado");
		}
		else {
			elemento.addClass("cerrado");
		}
	});
}
