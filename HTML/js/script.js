$( document ).ready(function() {
(function($){
    var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop && $(window).scrollTop() >= 200){
	       $('.main-nav').removeClass('nav-up').addClass('nav-down');
	   } else {
	      $('.main-nav').removeClass('nav-down').addClass('nav-up');
	   }
       lastScrollTop = st;
    });
})(jQuery);


$(document).scroll(function() { 
   if($(window).scrollTop() <= 50) {
      $('.main-nav').css("top" , "50px");
   }else{
        $('.main-nav').css("top" , "0px");
   }
});

});


