

$("div#work").click( function(){
	console.log("Work pressed")
	$("div#home_main_text_container").fadeOut('slow').css("display", "none");
	$("div#work_main_text_container").fadeIn('slow').css("display", "block");
});


$("div#home").click( function(e){
	console.log("Home pressed")
	$("div#work_main_text_container").fadeOut('slow').css("display", "none");
	$("div#home_main_text_container").fadeIn('slow').css("display", "block");
});

$("#video").on('hide', function(e) {
	$('iframe#pres_video').attr('src','');
	$('iframe#pres_video').attr('src','http://player.vimeo.com/video/65318374');
});





