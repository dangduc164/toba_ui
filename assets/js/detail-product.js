$('.p-detail-product__slider  ul').slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button class="btn btn-next"><img src="./assets/img/home/icn_next.svg" alt=""></button>',
    prevArrow: '<button class="btn btn-prev"><img src="./assets/img/home/icn_prev.svg" alt=""></button>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
});