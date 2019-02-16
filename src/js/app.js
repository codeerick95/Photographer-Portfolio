$(document).ready(function () {
    // Carousel
    $('.carousel-welcome').slick({
        autoplay: true,
        prevArrow: '',
        nextArrow: ''
    });

    // Scroll efect
    ScrollReveal().reveal('#sobre-mi', { delay: 1000 });
    ScrollReveal().reveal('#portafolio', { delay: 1000 });
    ScrollReveal().reveal('#contacto', { delay: 1000 });
    ScrollReveal().reveal('#developer-info', { delay: 1000 });
});

