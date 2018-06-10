$(function(){
	$('.offer_reviews').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		arrows: true,
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
	});
	$('.trust_wrapp').slick({
		slidesToShow: 5,
  		slidesToScroll: 1,
  		arrows: true,
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
	});
	if($(window).width() > 1024)
{

   $('body').parallax({

      'elements': [
        {
          'selector': '.paralax_block',
          'properties': {
            'x': {
              'right': {
                'initial': 150,
                'multiplier': 0.04,
                'unit': 'px',
                'invert': false
              }
            },
            'y': {
              'top': {
                'initial': 54,
                'multiplier': 0.02,
                'unit': 'px',
                'invert': false
              }
            }
          }
        }
      ]
    });

} else {
   // change functionality for larger screens
}

});
