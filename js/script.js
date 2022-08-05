$(document).ready(function () {
	$('.menu__link-arrow').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.mobile-menu').click(function (event) {
		$(this).toggleClass('active');
		$('.menu-mobile-back').toggleClass('active');
		$('.header-mobile-menu').toggleClass('active');
		$('body').toggleClass('active');
	});
	$('.menu-mobile-back').click(function (event) {
		$('.mobile-menu').removeClass('active');
		$('.menu-mobile-back').removeClass('active');
		$('.header-mobile-menu').removeClass('active');
		$('body').removeClass('active');
	});
});