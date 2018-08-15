import $ from 'jquery';
import popper from 'popper.js';
import 'slick-carousel'
import bootstrap from 'bootstrap';

/*$('.slider_item').css('background','red');*/
let rand = Math.floor(Math.random() * 10);
$('.Slider').slick({
   /* autoplay: true,
    autoplaySpeed: 3000,*/
   initialSlide: rand,
   arrows: true,

});
jQuery(function() {
    jQuery('body').css('color', 'red');
});