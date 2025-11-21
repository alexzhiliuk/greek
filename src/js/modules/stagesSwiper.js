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
    
})

