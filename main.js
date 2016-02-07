$(document).on('ready', function() { 
	jQuery(function($){
		$('.hamburger-icon').click(function(){
			$('.responsive-nav-menu').toggleClass('expand')
			$('.nav-bar').toggleClass('expand')
			$('.wrapper').toggleClass('scrollable')
			$('.footer').toggleClass('no-footer')
		})
	})

	// Toggles classes on expanded mobile nav
	jQuery(function($){
		$('.mobile-nav').click(function(){
			$('.responsive-menu').toggleClass('expand')
			$('.wrapper').toggleClass('scrollable')
			$('.footer').toggleClass('no-footer')
		})
	})



});