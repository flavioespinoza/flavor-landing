(function($) {
	'use strict';
	/*
	tooltip
	=========================== */
	$('.tooltips').tooltip({
		selector: "a[data-toggle^=tooltip]"
	});

	/* Client logo hover
	=========================== */	
	$(".logo-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$('.client-link').hover(function(){
				$(this).find('.logo-hover').stop().fadeTo(900, 1);
				$(this).find('.client-logo').stop().fadeTo(900, 0);
	}, function() {
				$(this).find('.logo-hover').stop().fadeTo(900, 0);
				$(this).find('.client-logo').stop().fadeTo(900, 1);
	});

	/* Tour scroll trigger
	 =========================== */
	$('#tour').click(function () {
		$('html,body').animate({
			scrollTop: $("#screenshot").offset().top
		});
	});






})(jQuery);