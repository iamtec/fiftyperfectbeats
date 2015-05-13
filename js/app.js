$(document).foundation();
$(function() {

var image;
console.log('ne')
$('.artists li').mouseover(function(){
	image = $(this).data('artist')
	$('.bg').css({'background-image':'url(images/' + image + '.jpg)'})
});
$('#intro').mouseover(function(){
	image = $(this).data('artist')
	$('.bg').css({'background-image':'none'})
});

$( window ).scroll(function() {
	$('#down').fadeOut();
});
});