		$(document).ready(function() {
			$().UItoTop({ easingType: 'easeOutQuart' });
		});


		$('#tour').click(function () {
			$('html,body').animate({
				scrollTop: $("#screenshot").offset().top
			});
		});

