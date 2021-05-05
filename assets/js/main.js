$(function () {
	$(".dropdown").on("click", function (e) {
		$(".dropdown-menu").addClass("show");
		e.stopPropagation()
	});
	$(document).on("click", function (e) {
		if ($(e.target).is(".dropdown-menu") === false) {
			$(".dropdown-menu").removeClass("show");
		}
	});
});


$(".dmt-btn").click(function () {
	$("#demographic").addClass("active");
	$("#pr_int").removeClass("active");
	$("#interest").removeClass("active");
});


$(".int-btn").click(function () {
	$("#pr_int").addClass("active");
	$("#demographic").removeClass("active");
	$("#interest").removeClass("active");
});

$(".inst_btn").click(function () {
	$("#interest").addClass("active");
	$("#demographic").removeClass("active");
	$("#pr_int").removeClass("active");
});