// SLICK SLIDER from https://kenwheeler.github.io/slick/ //


// initialize slick
$('.single-item').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    centerMode: false,
    slidesToShow: 1,
    lazyLoad: 'progressive',
    speed: 2000,
    rtl: true,
});

// next button
$('.next-btn').click(function () {
    $('.single-item').slick('slickNext');
});

// previous button
$('.prev-btn').click(function () {
    $('.single-item').slick('slickPrev');
});