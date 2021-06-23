$(document).ready(function() {
    $('.menu').on('click', function(e) {
        $('.menu').toggleClass('menu-active')
        $('nav').toggleClass('active-nav')
        $('body').toggleClass('lock')
    })
})   

$(document).ready(function () {
    $('.first__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:600,
        easing:'_ease_',
        infinite: true,
        autoplay: true,
        autoplaySpeed:2000,
        });
})

$(document).ready(function () {
    $('.second__slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        slidesToShow:1,
        centerMode:true,
        infinite: true,
        spped: 400,
        asNavFor:'.figures',
    })
    $('.figures').slick({
        arrows:false,
        dots:false,
        fade:true,
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:'.second__slider'
    });
});

$(document).ready(function () {
    $('.third__slider').slick({
        arrows: true,
        dots: false,
        variableWidth: true,
        slidesToShow:1,
        centerMode: false,
        responsive:[
            {
                breakpoint: 500,
                settings: {
                    centerMode: true
                }
            }
        ],
        infinite: true,
        spped: 400,
        slidesToScroll:1,
        lazyLoad: true,
        lazyLoad: 'ondemand',
        easing:'_ease_',
        });
})

$(document).ready(function () {
    $('.four__slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        slidesToShow:1,
        centerMode: false,
        infinite: false,
        spped: 400,
        slidesToScroll:1,
        // lazyLoad: true,
        // lazyLoad: 'ondemand',
        easing:'_ease_',
        });
})