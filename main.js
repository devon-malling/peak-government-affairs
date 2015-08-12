$(document).on('ready', function() { 
	jQuery(function($){
		$('.contact-bar').click(function(){
			$('.responsive-contact-menu').toggleClass('expand')
		})
	})
	jQuery(function($){
		$('.mobile-nav').click(function(){
			$('.responsive-menu').toggleClass('expand')
		})
	})



});