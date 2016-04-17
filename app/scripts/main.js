$(document).ready(function() {
	"use strict";

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this,
				args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) {func.apply(context, args);}
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) {func.apply(context, args);}
		};
	} //debounce fn
 
    var initialized = false;
    var myScene;
    var topContent = $('#topContent');
    
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

    	if (!initialized){
    		topContent.removeClass('cloak');
    		initialized = true;
    	}
	    
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


	//change header background
    if (!Modernizr.touch) {
        $(window).one('scroll', function() {
            if ($(this).scrollTop() > 0) {
                var controller = new ScrollMagic.Controller();
                myScene = new ScrollMagic.Scene({
                    triggerElement: "#topCta"
                })
                .setClassToggle("#top", "scrolled") // trigger a TweenMax.to tween
                .addTo(controller);
            }
        });
    }

	//smooth scrolling on page
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

		if ($(this).attr("id") === "topCta") {
			setTimeout(function(){
				myScrollAnimation();
			}, 300);
		} else {
			myScrollAnimation();
		}
	});

	//main nav highlighting
	var $sections = $('#top, #about, #technology, #projects, #contact');

	$(window).scroll(function(){
		var currentScroll = $(this).scrollTop();
		var $currentSection;
		var sectionSet = false;

		$sections.each(function(){
			var divPosition = $(this).offset().top;

			if ( divPosition - 1 < currentScroll ) {
				$currentSection = $(this);
				sectionSet = true;
			}

			if (sectionSet) {
				var id = $currentSection.attr('id');
				$('#mainNav a').removeClass('active');
				$("#mainNav a[href=#"+id+"]").addClass('active'); 
			}
		});

	});

	//mobile nav
	var mobileNav = $("#mainNav").clone();

	mobileNav.attr("id", "mobileNav");

	var navToggle = $("#nav-toggle");

	$("#mainWrap").prepend(mobileNav);

	navToggle.click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		mobileNav.toggleClass("visible");
	});

	$("#mobileNav").on("click", "a", function(e) {
		e.preventDefault();
		navToggle.toggleClass("active");
		mobileNav.toggleClass("visible");

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		});
	});

	//my photo (top)
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