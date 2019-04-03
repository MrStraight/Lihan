$(function(){

	$('[data-spy="scroll"]').each(function () {
	  var $spy = $(this).scrollspy('refresh')
	})
		$('body').scrollspy({ target: '#navbar-example' })
		
})