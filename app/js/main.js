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
			arrows: false,
			dots: true,
			draggable: true,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
		});
	});
})(jQuery);
