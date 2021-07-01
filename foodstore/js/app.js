$(document).ready(function() {
    $('.food-slider').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        // auto play in slider
        autoplay:true,
    });
});