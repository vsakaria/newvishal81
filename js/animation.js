

$("div#work").click( function(){

  console.log("work triggered")

  $("div#home_main_text_container").css("display", "none");
  $("div#work_main_text_container").css("display", "block");

});


$("div#home").click( function(e){

  console.log("home triggered")

  $("div#work_main_text_container").css("display", "none");
  $("div#home_main_text_container").css("display", "block");


});

$("#video").on('hide', function(e) {

	console.log("back droptrigger")
	$('iframe#pres_video').attr('src','');
	$('iframe#pres_video').attr('src','http://player.vimeo.com/video/65318374');
});

// $(function() {

//   console.log("doc ready")

// $('div#video_link').effect("bounce", { times:10 }, 300);

// });
// $("a#video").click( function(e){
//     $('#video').modal()
// });