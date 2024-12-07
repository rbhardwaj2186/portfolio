$(window).on("load", function() {
    console.log("Window loaded, fading out loader...");
    $(".loader .inner").fadeOut(500, function() {
        // Note the space between .loader and .inner
        $(".loader").fadeOut(750);
    });
});
$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Machine Learning Engineer", "Graduate Master Student"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
   	 	loop:   true,
   	 	rewind: true,
   	 	trackColor: '#f2f2f2',
        items: 4,
        animateOut: 'fadeOut',
  		animateIn: 'fadeIn',
    	responsive:{
       	    0:{
        	     items:1
        	},
        	480:{
            	 items:2
       		},
        	768:{
           		 items:3
      		},
     	    938:{
           		 items:4
       		}
     }
    });

 


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    console.log(skillsTopOffset);

    $(window).scroll(function() {

    	console.log(window.pageYOffset);

    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

    		$('.chart').easyPieChart({
	            easing: 'easeInOut',
	            barcolor: '#ef1e25',
	            trackColor:'#3CB371',
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
	            }
    });

    	}

    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

		    		  $(".counter").each(function() {
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);
  	  })

	  countUpFinished = true;


    }



    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
    	filter: "*",
    	transitionDuration: "0.8s",
    	easing: "linear"
    })

    $("#filters a").click(function(){

    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	$(".items").isotope({
    	filter: selector,
    	transitionDuration: "0.8s",
    	easing: "linear"
    });

    return false;

    });

    $("#navigation li a").click(function(e) {

    		e.preventDefault();
    		var targetElement = $(this).attr("href");
    		var targetPosition = $(targetElement).offset().top;
    		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    	
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {


    	var body = $("body");

    	if($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
    	}
    	else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
    	}
    }

  

});