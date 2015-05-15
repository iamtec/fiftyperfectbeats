	
$(function() {

var image, eachImg, appender;
$('.artists li').mouseover(function(){
	image = $(this).data('artist')
	$('.bg').removeClass('active');
	$('.bg2 li').removeClass('active');
	$('.bg2 li[data-artist="' + image + '"]').addClass('active');
});
$('#intro').mouseover(function(){
	image = $(this).data('artist');
	$('.bg2 li').removeClass('active');
	$('.bg').addClass('active');
});

$( window ).scroll(function() {
	$('#down').fadeOut();
});
$('.artists li').each(function(){
	eachImg = $(this).data('artist');
	appender = '<li data-artist="' + eachImg + '" style="background-image:url(images/' + eachImg + '.jpg);">s</li>'
	$('.bg, .bg2').append(appender);
});



});
$(window).load(function(){
	$("#intro").addClass('loaded');
	$('.loader-inner').fadeOut();
})