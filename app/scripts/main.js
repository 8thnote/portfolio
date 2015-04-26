/* jshint devel:true */
//window height

$(document).ready(function() {
	"use strict";
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this,
				args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}; //debounce fn
 
    var initialized = false;
    var myScene;
    
	var myResize = function() {
	    var el = document.getElementById('mainWrap');
    	var fontPx = window.getComputedStyle(el, null).getPropertyValue('font-size');
    	var fontSizeNum = parseFloat(fontPx);
    	var widthPx = window.getComputedStyle(el, null).getPropertyValue('width');
    	var layoutWidthNum = parseFloat(widthPx);
    	var layoutEmNum = layoutWidthNum / fontSizeNum;
    	var mobileBreakpoint = 35.85;

    	var wheight = $(window).height(); //get height of the window
    	$('.fullheight').css('height', wheight);
	    
		if (!Modernizr.touch && layoutEmNum >= mobileBreakpoint) {
			//desktop js
			$('.fullheight-desktop').css('height', wheight);

		} else {
		    if (layoutEmNum < mobileBreakpoint) {
			    //mobile js
			    $('.fullheight-desktop').css('height', 'auto');
		    }
		}
	}; //myResize
	myResize();
	var myResizeDebounced = debounce(myResize, 250);
	window.addEventListener('resize', myResizeDebounced);

	$('a[href^="#"]').on('click',
		function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    var myScrollAnimation = function() {
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		};

		if ($(this).attr("id") == "topCta") {
			setTimeout(function(){
				myScrollAnimation();
			}, 300);
		} else {
			myScrollAnimation();
		}
	});

	//my photo
	$("#topCta").hover(function() {
		$("#topPhoto").toggleClass("hover");
	});
	$("#topCta").click(function() {
		$("#topPhoto").addClass("clicked");
		setTimeout(function(){
			$("#topPhoto").removeClass("clicked");
		}, 1000);
	});


});//document ready