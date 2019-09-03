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

