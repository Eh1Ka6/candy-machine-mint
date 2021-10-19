(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		

				
		var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
		    var hamburgers = document.querySelectorAll(".hamburger");
		    if (hamburgers.length > 0) {
		      forEach(hamburgers, function(hamburger) {
		        hamburger.addEventListener("click", function() {
		          this.classList.toggle("is-active");
		        }, false);
		      });
		    }
		




           

           //computer nav
		 jQuery(".header-inner ul li:nth-child(1) a").click(function() {
         var a = jQuery(".main-area ").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	     });	


		 jQuery(".header-inner ul li:nth-child(2) a").click(function() {
         var a = jQuery(".paiv-area ").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	    });	


		 jQuery(".header-inner ul li:nth-child(3) a").click(function() {
         var a = jQuery(".vsn-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	


       jQuery(".header-inner ul li:nth-child(4) a").click(function() { 
         var a = jQuery(".dnpaiv-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	


	   jQuery(".header-inner ul li:nth-child(5) a").click(function() { 
         var a = jQuery(".faq-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	







	    //mobile nav
		 jQuery(".main-menu-part ul li:nth-child(1) a").click(function() {
         var a = jQuery(".main-area ").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	     });	


		 jQuery(".main-menu-part ul li:nth-child(2) a").click(function() {
         var a = jQuery(".paiv-area ").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	    });	


		 jQuery(".main-menu-part ul li:nth-child(3) a").click(function() {
         var a = jQuery(".vsn-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	


       jQuery(".main-menu-part ul li:nth-child(4) a").click(function() { 
         var a = jQuery(".dnpaiv-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	


	   jQuery(".main-menu-part ul li:nth-child(5) a").click(function() { 
         var a = jQuery(".faq-area").offset().top;
         jQuery("html").animate({scrollTop: a},2000);
	   });	

		
		
		
		
		
		
	});
})(jQuery);