import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const heroImgSlider = () => {
	new Swiper('.hero__img', {
		// configure Swiper to use modules
		modules: [Navigation, Autoplay, Pagination],

		loop: true,

		// autoplay: {
		// 	delay: 5000,
		// },

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

export default heroImgSlider;
