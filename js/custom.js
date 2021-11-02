$(document).ready(function(){

	/*
	  ==============================================================
		   Courses By Subject Script
	  ==============================================================
	*/
	if($('.courses_subject_carousel').length){
		$('.courses_subject_carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:2},
				480:{items:2},
				600:{items:3},
				800:{items:4},
				1000:{items:4},
				1200:{items:5},
				1600:{items:6}
			}
		})
	}
	


	
	/*
	  ==============================================================
		   Most Popular Courses Script
	  ==============================================================
	*/
	if($('.most_popular_courses').length){
		$('.most_popular_courses').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:2},
				480:{items:2},
				600:{items:3},
				1000:{items:3},
				1200:{items:4},
				1600:{items:4}
			}
		})
	}
	/*
	  ==============================================================
		   Testimonial Courses Script
	  ==============================================================
	*/
	if($('.testimonial_carousel').length){
		$('.testimonial_carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				480:{items:2},
				600:{items:2},
				1000:{items:2},
				1200:{items:2},
				1600:{items:2}
			}
		})
	}
	




});