$(document).ready(function(){"use strict";function t(t,o,e){var i;return function(){var a=this,n=arguments,l=function(){i=null,e||t.apply(a,n)},s=e&&!i;clearTimeout(i),i=setTimeout(l,o),s&&t.apply(a,n)}}var o,e=!1,i=$("#topContent"),a=function(){var t=document.getElementById("mainWrap"),o=window.getComputedStyle(t,null).getPropertyValue("font-size"),a=parseFloat(o),n=window.getComputedStyle(t,null).getPropertyValue("width"),l=parseFloat(n),s=l/a,c=35.85,r=$(window).height();$(".fullheight").css("height",r),e||(i.removeClass("cloak"),e=!0),!Modernizr.touch&&s>=c?$(".fullheight-desktop").css("height",r):s<c&&$(".fullheight-desktop").css("height","auto")};a();var n=t(a,250);window.addEventListener("resize",n),Modernizr.touch||$(window).one("scroll",function(){if($(this).scrollTop()>0){var t=new ScrollMagic.Controller;o=new ScrollMagic.Scene({triggerElement:"#topCta"}).setClassToggle("#top","scrolled").addTo(t)}}),$('a[href^="#"]').on("click",function(t){t.preventDefault();var o=this.hash,e=$(o),i=function(){$("html, body").stop().animate({scrollTop:e.offset().top},900,"swing",function(){window.location.hash=o})};"topCta"===$(this).attr("id")?setTimeout(function(){i()},300):i()});var l=$("#top, #about, #technology, #projects, #contact");$(window).scroll(function(){var t,o=$(this).scrollTop(),e=!1;l.each(function(){var i=$(this).offset().top;if(i-1<o&&(t=$(this),e=!0),e){var a=t.attr("id");$("#mainNav a").removeClass("active"),$("#mainNav a[href=#"+a+"]").addClass("active")}})});var s=$("#mainNav").clone();s.attr("id","mobileNav");var c=$("#nav-toggle");$("#mainWrap").prepend(s),c.click(function(t){t.preventDefault(),$(this).toggleClass("active"),s.toggleClass("visible")}),$("#mobileNav").on("click","a",function(t){t.preventDefault(),c.toggleClass("active"),s.toggleClass("visible");var o=this.hash,e=$(o);$("html, body").stop().animate({scrollTop:e.offset().top},900,"swing",function(){window.location.hash=o})}),$("#topCta").hover(function(){$("#topPhoto").toggleClass("hover")}),$("#topCta").click(function(){$("#topPhoto").addClass("clicked"),setTimeout(function(){$("#topPhoto").removeClass("clicked")},1e3)})});