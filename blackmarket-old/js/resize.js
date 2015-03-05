var maxpx = $(document).height();
var widthpx = $(document).width();
var marginpx = 110;
var mobile = false;

$(".container-fluid, .col-md-5, .col-md-7").css('max-height', (maxpx - marginpx) + 'px');
$(".col-md-5, .col-md-7").css('overflow-y', 'auto');
if (widthpx <= 780) {
	mobile = true;
	window.alert("Please, play in landscape mode for a better compatibility! Thanks! :)")
	$("#s-d1, #s-d2, #s-d3").css("display", "true");
} else {
	$("#s-d1, #s-d2, #s-d3").css("display", "none");
};