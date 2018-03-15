// 1. Start Fix Header
$(window).scroll(function() {
    var sticky = $('.mobile-menu'),
        scroll = $(window).scrollTop();

    if (scroll >= 40) {
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');

    }
});
// 1. End Fix Header
// 2. Start Hover Dropdown Menu Open
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
// 2. End Hover Dropdown Menu Open
// 3. Start Client Carousel
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
// 3. End Client Carousel
// 4. Start Cleint Testimonials
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        loop:true,
        autoPlay:true,
        autoplaySpeed: 1500,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:false
    });
});
// 4. End Cleint Testimonials
