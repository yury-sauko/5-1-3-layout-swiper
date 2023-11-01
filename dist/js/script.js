const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        768: {
            enabled: false,
            slidesPerView: 'auto',
        }
    }
});