/* Nascondo menu allo scrolling down e mostro allo scroll up */

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

/* script per stilizzare il menu in cima alla pagina */

$(document).scroll(function() { 
   if($(window).scrollTop() <= 50) {
      $('.main-nav').addClass("main-nav-top").removeClass("main-nav-scroll");
   }else{
        $('.main-nav').addClass("main-nav-scroll").removeClass("main-nav-top");
   }
});

});
