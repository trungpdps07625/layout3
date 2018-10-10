// Main
console.log('FullStack Vietnam!')

$('.home_slider .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
});

$('.home_clients .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})