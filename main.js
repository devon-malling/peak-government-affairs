$(document).on('ready', function() { 
	jQuery(function($){
		$('.hamburger-icon').click(function(){
			$('.responsive-nav-menu').toggleClass('expand')
		})
	})
	jQuery(function($){
		$('.mobile-nav').click(function(){
			$('.responsive-menu').toggleClass('expand')
		})
	})



});