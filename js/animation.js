

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

// $("a#video").click( function(e){
//     $('#video').modal()
// });