(function ($) {
		'use strict'

//code start
$('.menu-icon i').on('click',function(){
	$('.mobile-menu').animate({
		left:0
	});
});
$('.menu-close i').on('click',function(){
	$('.mobile-menu').animate({
		left:-250
	});
});


})(jQuery);