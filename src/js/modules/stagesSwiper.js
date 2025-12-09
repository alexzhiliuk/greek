import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const stagesSwiper = new Swiper('#stagesSwiper', {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
        el: '#stagesSwiperPagination',
    },

    on: {
        init: function() {
            // Активируем первое изображение при инициализации
            updateStageImage(this.activeIndex);
        },
        slideChange: function() {
            // Обновляем изображение при смене слайда
            updateStageImage(this.activeIndex);
        }
    }
    
})


function updateStageImage(index) {
    const images = document.querySelectorAll('.stages__img');
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('_active');
        } else {
            img.classList.remove('_active');
        }
    });
}
