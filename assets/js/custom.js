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

function normalizeSlideHeights() {
    $('.carousel').each(function(){
      var items = $('.carousel-item', this);
      // reset the height
      items.css('min-height', 0);
      // set the height
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get() );
      items.css('min-height', maxHeight + 'px');
    })
}

$(window).on(
    'load resize orientationchange', 
    normalizeSlideHeights);

$("#aboutArteryLink").click(function() {
    $('html').animate({
        scrollTop: $("#aboutArtery").offset().top
    }, 50);
});