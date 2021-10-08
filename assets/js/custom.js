// OWL Carousel
$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 0,
		autoplay: true,
		nav: false,
		dots: false,
		loop: true,
		mouseDrag: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
});

// Navbar background color
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $( "#navbar" ).addClass( "navbar-bg-color" );
    } else {
        $( "#navbar" ).removeClass( "navbar-bg-color" );
    }
}