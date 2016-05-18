/**
 * Created by Flavor on 5/17/16.
 */
(function($) {
  'use strict';

  $('.imac-device').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: false,
    slideshow: true,
    mousewheel: false
  });

  $('#flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    easing: "swing",
    multipleKeyboard: true,
    directionNav: true,
    controlNav: false,
    slideshow: false,
    before: function(slider){
      $('#flexslider--caption').flexslider(slider.animatingTo);
    }
  });

  $('#flexslider--caption').flexslider({
    animation: "slide",
    animationLoop: true,
    easing: "swing",
    directionNav: false,
    multipleKeyboard: true,
    controlNav: false,
    slideshow: false,
    before: function(slider){
      $('#flexslider').flexslider(slider.animatingTo);
    }
  });


})(jQuery);