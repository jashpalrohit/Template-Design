// 0. Start Loader
jQuery(document).ready(function() {
    jQuery("#spinner").fadeOut("slow");
});
// 0. End Loader
// 1. Start Fix Header
jQuery(window).scroll(function() {
    var sticky = jQuery('.mobile-menu'),
        scroll = jQuery(window).scrollTop();

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
jQuery(document).ready(function() {
    jQuery('.customer-logos').slick({
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
jQuery(document).ready(function() {
    jQuery("#testimonial-slider").owlCarousel({
        items: 2,
        loop: true,
        autoPlay: true,
        autoplaySpeed: 1500,
        itemsDesktop: [
            1000, 2
        ],
        itemsDesktopSmall: [
            979, 2
        ],
        itemsTablet: [
            768, 1
        ],
        pagination: true,
        autoPlay: false
    });
});
// 4. End Cleint Testimonials
// 5. Start Counter
jQuery.fn.jQuerySimpleCounter = function(options) {
    var settings = jQuery.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);
    var thisElement = jQuery(this);
    jQuery({count: settings.start}).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};
jQuery('#number1').jQuerySimpleCounter({end: 12, duration: 3000});
jQuery('#number2').jQuerySimpleCounter({end: 55, duration: 3000});
jQuery('#number3').jQuerySimpleCounter({end: 359, duration: 2000});
jQuery('#number4').jQuerySimpleCounter({end: 246, duration: 2500});
// 5. End Counter
// 6. Start Back to Top
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 20) {
            jQuery('#toTopBtn').fadeIn();
        } else {
            jQuery('#toTopBtn').fadeOut();
        }
    });

    jQuery('#toTopBtn').click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
// 6. End BAck to Top
// 7. Start Home Blog slides
$(".home-news-slide").owlCarousel({
    autoPlay: true,
    slideSpeed: 1500,
    pagination: false,
    navigation: true,
    items: 3,
    navigationText: [
        "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"
    ],
    itemsDesktop: [
        1199, 3
    ],
    itemsDesktopSmall: [
        980, 2
    ],
    itemsTablet: [
        768, 2
    ],
    itemsMobile: [479, 1]
});
// 7. End Home Blog slides
