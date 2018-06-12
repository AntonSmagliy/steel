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
	$('.wrap_slide').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
        prevArrow: '<i class="fa fa-chevron-right fa-chevron-right_l" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right fa-chevron-right_r" aria-hidden="true"></i>'
	});
// if($(window).width() > 1024)
// {

//    $('body').parallax({

//       'elements': [
//         {
//           'selector': '.paralax_block',
//           'properties': {
//             'x': {
//               'right': {
//                 'initial': 54,
//                 'multiplier': 0.02,
//                 'unit': 'px',
//                 'invert': false
//               }
//             },
//             'y': {
//               'top': {
//                 'initial': 54,
//                 'multiplier': 0.04,
//                 'unit': 'px',
//                 'invert': false
//               }
//             }
//           }
//         }
//       ]
//     });

// } else {
//    // change functionality for larger screens
// }
// $(window).scroll(function() {
// 	$('.paralax_block').each(function(){
// 		var $bgobj = $(this);
// 		$bgobj.css({ 'left': '1%' });
// 	});
// });
});
// $(document).ready(function(){
// 	// Кешируем объект окна
// 	$window = $(window);
                
//    $('.paralax_block').each(function(){
//      var $bgobj = $(this); // Назначаем объект
                    
//       $(window).scroll(function() {
                    
// 		// Прокручиваем фон со скоростью var.
// 		// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
// 		var yPos = ($window.scrollTop() / $bgobj.data(900)); 
		
// 		// Размещаем все вместе в конечной точке
// 		var coords = '50% '+ yPos + 'px';

// 		// Смещаем фон
// 		$bgobj.css({ left: coords });
		
// 	}); 

//  });	

// }); 
