'use strict';
console.log('\'Allo \'Allo!');

// Slider for Web Page
$(document).ready(function(){
	// defined variables for config
	var width = '720px';
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;

	// cache DOM elements, saves run time
	var $slider = $('#slider');
	var $slideHolder = $slider.find('.slides');
	var $slides = $slideHolder.find('.slide');

	// Interval to run Slider on Page
	var interval;

	function startSlider() {
		interval = setInterval(function() {
			$slideHolder.animate({'margin-left': '-='+width}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideHolder.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider();
});