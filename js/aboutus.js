jQuery(document).ready(function() {
    var navToggle = jQuery('#nav_toggle');
    var nav = jQuery('.nav');
    
    navToggle.on('click', function() {
      nav.slideToggle();
    });
})
