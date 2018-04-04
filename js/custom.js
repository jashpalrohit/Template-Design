new WOW().init();

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
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
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
    jQuery({
        count: settings.start
    }).animate({
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
jQuery('#number1').jQuerySimpleCounter({
    end: 12,
    duration: 3000
});
jQuery('#number2').jQuerySimpleCounter({
    end: 55,
    duration: 3000
});
jQuery('#number3').jQuerySimpleCounter({
    end: 359,
    duration: 2000
});
jQuery('#number4').jQuerySimpleCounter({
    end: 246,
    duration: 2500
});
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
    autoPlay: false,
    slideSpeed: 1500,
    pagination: false,
    loop: true,
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
// 8. Start Home Team Slider
jQuery('#owl-our-team').owlCarousel({
    autoPlay: false,
    slideSpeed: 1500,
    pagination: false,
    navigation: true,
    items: 3,
    loop: true,
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
// 8. End Home Team Slider
// 9. Start Project Masonry
(function($) {
    var $blocks = $('.our-projects-block');
    if ($blocks.length <= 0) {
        return;
    }
    $blocks.each(function() {
        var $this = $(this),
            $grid = $this.find('.our-projects-items'),
            $filterBtns = $this.find('.our-projects-sort a[data-group]');
        $grid.pzt_shuffle({
            itemSelector: '[class*="col-"]',
            gutterWidth: 0,
            speed: 600,
            easing: 'ease'
        });
        $filterBtns.on('click', function(e) {
            var $this = $(this);
            $this.parent().siblings().removeClass('active');
            $this.parent().addClass('active');
            $grid.shuffle('shuffle', $this.data('group'));
            e.preventDefault();
        });
    });
})(jQuery);
// 9. End Project Masonry

// 10. Start Pricing Selection
jQuery(document).ready(function($) {
    checkScrolling($('.pricing-body'));
    $(window).on('resize', function() {
        window.requestAnimationFrame(function() {
            checkScrolling($('.pricing-body'))
        });
    });
    $('.pricing-body').on('scroll', function() {
        var selected = $(this);
        window.requestAnimationFrame(function() {
            checkScrolling(selected)
        });
    });

    function checkScrolling(tables) {
        tables.each(function() {
            var table = $(this),
                totalTableWidth = parseInt(table.children('.pricing-features').width()),
                tableViewport = parseInt(table.width());
            if (table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
                table.parent('li').addClass('is-ended');
            } else {
                table.parent('li').removeClass('is-ended');
            }
        });
    }
    bouncy_filter($('.pricing-container'));

    function bouncy_filter(container) {
        container.each(function() {
            var pricing_table = $(this);
            var filter_list_container = pricing_table.children('.pricing-switcher'),
                filter_radios = filter_list_container.find('input[type="radio"]'),
                pricing_table_wrapper = pricing_table.find('.pricing-wrapper');
            var table_elements = {};
            filter_radios.each(function() {
                var filter_type = $(this).val();
                table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="' + filter_type + '"]');
            });
            filter_radios.on('change', function(event) {
                event.preventDefault();
                var selected_filter = $(event.target).val();
                show_selected_items(table_elements[selected_filter]);
                if (!Modernizr.cssanimations) {
                    hide_not_selected_items(table_elements, selected_filter);
                    pricing_table_wrapper.removeClass('is-switched');
                } else {
                    pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                        hide_not_selected_items(table_elements, selected_filter);
                        pricing_table_wrapper.removeClass('is-switched');
                        //change rotation direction if .pricing-list has the .bounce-invert class
                        if (pricing_table.find('.pricing-list').hasClass('bounce-invert'))
                            pricing_table_wrapper.toggleClass('reverse-animation');
                    });
                }
            });
        });
    }

    function show_selected_items(selected_elements) {
        selected_elements.addClass('is-selected');
    }

    function hide_not_selected_items(table_containers, filter) {
        $.each(table_containers, function(key, value) {
            if (key != filter) {
                $(this).removeClass('is-visible is-selected').addClass('is-hidden');

            } else {
                $(this).addClass('is-visible').removeClass('is-hidden is-selected');
            }
        });
    }
});
// 10. End Pricing Selection
// 11. Start Blog Share
$(document).ready(function($) {
    $('.card__share > a').on('click', function(e) {
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find('div').toggleClass('card__social--active');
        $(this).toggleClass('share-expanded');
    });

});
// 11. End Blog Share
// 13. Start Project Demo One
(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-awesome-work').cubeportfolio({
        filters: '#js-filters-awesome-work',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'scaleSides',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },

        plugins: {
            loadMore: {
                element: '#js-loadMore-awesome-work',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);
// 13. End Project Demo One
// 14. Full Screen Projects Demo Two
(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-lightbox-gallery').cubeportfolio({
        filters: '#js-filters-lightbox-gallery1, #js-filters-lightbox-gallery2',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
            }
        }],
        defaultFilter: '*',
        animationType: 'flipOutDelay',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'overlayBottomAlong',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },

        plugins: {
            loadMore: {
                element: '#js-loadMore-lightbox-gallery',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);
// 14. Full Screen Projects Demo Two
// 15. Gallery Demo One
(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);

// 15. Gallery Demo Two
// 12. Start Google Map
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var myLatlng = new google.maps.LatLng(-6.373091, 106.835175);
    var mapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel: false,
        center: myLatlng,
        styles: [{
            "stylers": [{
                "hue": "#ff1a00"
            }, {
                "invert_lightness": true
            }, {
                "saturation": -100
            }, {
                "lightness": 33
            }, {
                "gamma": 0.5
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2D333C"
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/map_marker.png',
        title: 'Lorem Ipsum'
    });
}
// 12. End Google Map
