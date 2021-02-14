$(document).ready(function(){
	$('.navbar-toggle').click(function(){
		$(this).toggleClass('open');
		$('.navbar-header').toggleClass('open');
	});

	if($(this).width() < 767){
		$('.nav-link').removeClass('nav-buyer');
		$('.nav-link').removeClass('nav-seller');
	}
});