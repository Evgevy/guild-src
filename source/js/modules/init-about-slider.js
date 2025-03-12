const slider = document.querySelector('[data-slider="about"]');
let swiper; 

const initAboutSlider = () => {
  
    if (!slider) {
      return;
    }

    if (!swiper) { 
      swiper = new Swiper(slider, {
        slidesPerView: 3, 
        slidesPerGroup: 1, 
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
        },
        speed: 600,
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3, 
            }
            
        },
      });
    }
};

export { initAboutSlider };
