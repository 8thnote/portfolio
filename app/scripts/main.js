/* jshint devel:true */
//window height

$(document).ready(function() {
var wheight = $(window).height(); //get height of the window

$('.fullheight').css('height', wheight);

$(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  $('.fullheight').css('height', wheight);
}) //on resize

});//document ready