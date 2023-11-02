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

/* Реализация функционала кнопки Показать все / Скрыть */
let clickToShow = document.querySelector('.show-brands');
clickToShow.addEventListener('click', showHideEl);

function showHideEl () {
    let swiperSlideHidden = document.querySelectorAll('.hiddenEl');
    
    swiperSlideHidden.forEach( (item, i) => {
        swiperSlideHidden[i].classList.toggle('hide1120');
    });

    if (!swiperSlideHidden[0].classList.contains('hide1120')) {
        clickToShow.classList.add('hide-brands');
    } else {
        clickToShow.classList.remove('hide-brands');
    }
}