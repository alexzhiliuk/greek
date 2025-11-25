import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, EffectFade} from 'swiper/modules'
const swiperModules = [Autoplay, Navigation, Pagination, EffectFade];

const historySwiper = new Swiper('#gallerySwiper', {
    modules: swiperModules,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 4000,
    slidesPerView: "auto",
    spaceBetween: 30,
    allowTouchMove: false, // Для draggable
    
})