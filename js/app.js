$(document).foundation();
$(function() {

var image;
console.log('ne')
$('li').mouseover(function(){
	image = $(this).data('artist')
	$('.bg').css({'background-image':'url(images/' + image + '.jpg)'})
});

});