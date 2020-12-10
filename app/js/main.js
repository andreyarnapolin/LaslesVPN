'use strict';

(function ($) {
	$(document).ready(function () {
		// Code

	});

	$(document).ready(function () {
		$('.customer__slider').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: true,
			dots: true,
			appendDots: '.slick-nav',
			draggable: true,
			prevArrow: $('.slick-prev'),
			nextArrow: $('.slick-next'),
		});
	});
})(jQuery);
