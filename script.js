$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click", function() {
		$("p").css("background-color", "red");
	});
	
	$("h2").hover(function() {
	    $("h2").css("background-color", "lightblue");
	});
	
	$("h2").mouseenter(function(){
        $(this).css("font-size", "2em");
    $("h2").mouseleave(function() {
        $(this).css("font-size", "1em");
    });
	
	$(".bottom_button").mouseover(function() {
	    $("body").css("background-color", "#000");
	}); 
	$(".bottom_button").mouseleave(function() {
	    $("body").css("background-color", "grey");
	});
	
	$("#first_button").on("click", function() {
		$("#first_button").hide("medium");
	});
	$(".card_para").hide();
    $(".bottom_button").on("click", function() {
        $(this).prev(".card_para").toggle("medium");
    });
    
    $(".bottom_button").on("mouseenter", function() {
    	$(this).fadeTo("1000", "1");
    });
    $(".bottom_button").on("mouseleave", function() {
    	$(this).fadeTo("1000", "1");	
    });
});
});
	


	

	

