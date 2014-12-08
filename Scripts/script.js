$(function () {
	$("#panel1").hide();
	$("#panel2").hide();

	$("#places").click(function() {
		/* Act on the event */
		$("#panel1").fadeToggle(1000);
	});
});