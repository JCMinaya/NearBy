$(function () {
	$("#panel1").hide();
	$("#panel2").hide();


	$("#places").click(function() {
		/* Act on the event */
		$("#panel1").slideToggle(1000);
	});
});