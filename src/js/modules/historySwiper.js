import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const historySwiper = new Swiper('#historySwiper', {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '#historySwiperPagination',
    },
    
})

$(".history [data-tab-trigger]").click(function() {
    const idSlide = Number($(this).attr("data-tab-id")) - 1;
    historySwiper.slideTo(idSlide)
})

