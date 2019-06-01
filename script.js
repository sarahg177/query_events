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

	$("h2").hover(function() {
		$("h2").css("background-color", "lightblue");
	});
	$("#head1").hover(function() {
		$("#head1").css("font-size", "20px");
	});
	$(".bottom_button").mouseenter(function() {
		$("body").css("background-color", "black");
	});
	$(".bottom_button").mouseleave(function() {
		$("body").css("background-color", "#eee");
	});
	
	$("#button-1").click(function() {
		$("#button-1").hide(1000);
	});
	$("#button-2").click(function() {
		$("#paragraph-2").toggle('slow');
	});
	$("#button-3").click(function() {
		$("#paragraph-3").slideToggle(1000);
	});
	$("#button-4").mouseenter(function() {
		$("#button-4").fadeTo(1000, 0.5);
	});
	$("#button-4").mouseleave(function() {
		$("#button-4").fadeTo(1000, 1);
	});
	$("p").click(function() {
		$(this).children("a").css("background-color", "yellow");
	});
	$("img").click(function() {
		$(this).next().children("p").slideDown("slow");
	});
	$(".card").click(function() {
		$(this).toggleClass("highlight");
	});
	$("#select_btn").click(function() {
		$(".card:not(.highlight)").hide();
	});
	$("#all_btn").click(function() {
		$(".card").show();
	});
});
