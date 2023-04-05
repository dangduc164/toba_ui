//js open nav sp
$('.btn-open-nav-sp').click(function(e) {
    e.preventDefault()
    $(this).toggleClass('show')
    $('.l-header__nav__sp').toggleClass('show')
    $("main").toggleClass('blur')
})
$('main').click(function() {
    $(this).removeClass('blur')
    $('.btn-open-nav-sp').removeClass('show')
    $('.l-header__nav__sp').removeClass('show')
})


//slider mv top
$('.p-home__mv__slider ul').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    nextArrow: '<button class="btn btn-next">Next</button>',
    prevArrow: '<button class="btn btn-prev">Previous</button>',
});

//slider products
$('.p-home__main__products__slider ul').slick({
    dots: false,
    speed: 600,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<button class="btn btn-next"><img src="./assets/img/home/icn_next.svg" alt=""></button>',
    prevArrow: '<button class="btn btn-prev"><img src="./assets/img/home/icn_prev.svg" alt=""></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});
// slider featured
$('.p-home__main__featured__content-inner > ul').slick({
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<button class="btn btn-next"><img src="./assets/img/home/icn_next.svg" alt=""></button>',
    prevArrow: '<button class="btn btn-prev"><img src="./assets/img/home/icn_prev.svg" alt=""></button>',
});

//slider news
$('.p-home__main__news__slider > ul').slick({
    dots: false,
    infinite: false,
    speed: 600,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<button class="btn btn-next"><img src="./assets/img/home/icn_next.svg" alt=""></button>',
    prevArrow: '<button class="btn btn-prev"><img src="./assets/img/home/icn_prev.svg" alt=""></button>',
})
//slider recruit
$('.p-recruite__sider__sp .slider-recruit').slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    centerMode: false,
    vertical: false,
    nextArrow: '<button class="btn btn-next"><img src="./assets/img/recruite/next-btn.svg" alt="err"></button>',
    prevArrow: '<button class="btn btn-prev"><img src="./assets/img/recruite/previous-btn.svg" alt="err"></button>',
});