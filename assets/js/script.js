$(document).ready(function() {

	$(".main-menubox ul li:nth-child(1)").click(function() {
      $(".menubox-round .pin-wrap").css("transform","translate(-50%, -50%) rotate(0deg)");
    });
    $(".main-menubox ul li:nth-child(2)").click(function() {
      $(".menubox-round .pin-wrap").css("transform","translate(-50%, -50%) rotate(125deg)");
    });
    $(".main-menubox ul li:nth-child(3)").click(function() {
      $(".menubox-round .pin-wrap").css("transform","translate(-50%, -50%) rotate(270deg)");
    });

    var winW = $(window).width();
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		freeMode: true,
		touchRatio: 0,
		breakpoints: {
			1520:  {
				slidesPerView: 'auto',
				touchRatio: 1,
			},
		}
	});
	$(".swiper-container").css("width",winW+"px");
});

$(window).resize(function() {
	var winW = $(window).width();
	$(".swiper-container").css("width",winW+"px");
});
