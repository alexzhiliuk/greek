import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const historySwiper = new Swiper('#gallerySwiper', {
    modules: swiperModules,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    // pagination: {
    //     el: '#',
    // },
    
})