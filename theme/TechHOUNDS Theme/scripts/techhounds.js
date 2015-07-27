$(document).ready(function() {
	$('.navbar').affix({
		offset: {
			top: $('.navbar').offset().top
		}
	});

	var url = window.location;

	$('.nav ul li a').filter(function() {
		return this.href == url;
	}).parent().append('<div class="active"></div>');

	$(function() {
		if ( document.location.href.indexOf('photos') > -1 ) {
			$('.nav a[href="http://www.techhounds.com/photos/"]').parent().append('<div class="active"></div>');
			$('.nav a[href="http://www.techhounds.com/photos/"]').parent().parent().parent().append('<div class="active"></div>');
		}
	});

	$('.dropdown > .dropdownMenu > li > .active').parent().parent().parent().append('<div class="active"></div>');
});

$('.navbar').on('affix.bs.affix', function () {
    var navHeight = $('.navbar').outerHeight(true);
    
    $('.navbar + .bodyContainer').css('margin-top', navHeight);
});

$('.navbar').on('affix-top.bs.affix', function () {
    $('.navbar + .bodyContainer').css('margin-top', 0);
});

$('.dropdown').click(function(event){

	if($(this).parent().parent().hasClass('mobileDisplay')){

		var thisEl = $(this);

		$('.mobileDisplay > ul > .dropdown').not(thisEl).each(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
			}
		});

		event.stopPropagation();
		$(this).toggleClass('open');
	}
});

$('.dropdown').hover(function(){
	if(!$(this).parent().parent().hasClass('mobileDisplay')){
		$(this).toggleClass('open');
	}
});

$(document).click(function(e) {
	if ($(e.target).not('.dropdown') && $('.nav').hasClass('mobileDisplay')){
		$('.dropdown').removeClass('open');
	}
});

$('#show').click(function(){
	$('.nav').toggleClass('mobileDisplay');
	$('.dropdown').removeClass('open');
});

if (matchMedia) {
	var mq = window.matchMedia("(min-width: 814px)");
	mq.addListener(widthChange);
	widthChange(mq);
}

function widthChange(mq) {
	if (mq.matches) {
		if ($('.nav').hasClass('mobileDisplay')){
			$('.nav').removeClass('mobileDisplay');
		}
	}
}
