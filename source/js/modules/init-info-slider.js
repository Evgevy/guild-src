const slider = document.querySelector('[data-slider="customer"]');
let swiper; 

const initInfoSlider = () => {
  if (window.innerWidth <= 1024) {
    if (!slider) {
      return;
    }

    if (!swiper) { 
      swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next.how__next',
          prevEl: '.swiper-button-prev.how__prev',
        },
      });
    }
  } else {
    if (swiper) { 
      swiper.destroy();
      swiper = null;
    }
  }
};


window.addEventListener('resize', initInfoSlider);

export { initInfoSlider };