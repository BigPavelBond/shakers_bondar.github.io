$('#menuButton').on('click', function(){
	$('body').addClass('is-active');
	$('.btn-nav').addClass('is-active');
	$('.js-nav').addClass('is-open');
	$('#menuButton').addClass('close');
	$('.btn-nav').hide();
});

$('.nav__list, .hero').on('click', function(){
	$('body').removeClass('is-active');
	$('.btn-nav').removeClass('is-active');
	$('.btn-nav.is-active').removeClass('is-active');
	$('.js-nav').removeClass('is-open');
	$('.btn-nav').show();
});