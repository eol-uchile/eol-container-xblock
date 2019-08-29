function EolContainerXBlock(runtime, element) {

    $(function ($) {
    });
}

function toggleExploremos(exploremosId) {	
	var elemento = $('#Exploremos_'+exploremosId+' .expbot');

	if (elemento.hasClass("ocultar")) 	{
		elemento.removeClass("ocultar");
	}
	else {
		elemento.addClass("ocultar");
	}

	$("body, html").stop(true,true);
	$("body, html").animate({ 
        scrollTop: $('#Exploremos_'+exploremosId).offset().top 
    }, 1000);
	$('#Exploremos_'+exploremosId+' .expmid').animate({
		height: "toggle"
	},1000);
}

