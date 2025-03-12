import { initAccordion } from './modules/accordion/init-accordion';
import { initHeaderAccordion } from './modules/header-accordion/init-header-accordion';
import { initCustomSelect } from './modules/custom-select/init-custom-select';
import { initHeader } from './modules/header/init-header';
import { initModals } from './modules/modal/init-modals';
import { initPhoneMask } from './modules/init-phone-mask';
import { initPhoneValidation } from './modules/init-phone-validation';
import { initInfoSlider } from './modules/init-info-slider';
import { initCheck } from './modules/init-check';
import { initAboutSlider } from './modules/init-about-slider';
import { initCube } from './modules/init-cube';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCheck();
  window.addEventListener('load', () => {
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initInfoSlider();
    initAboutSlider();
    initCube();
  });
});


// const line = document.querySelector('.service__line');

// function addTransition() {
//   line.style.transition = 'width 1.5s ease-out';
// }

// addTransition();

// window.addEventListener('scroll', function() {
//   const heads = document.querySelectorAll('.service__titles');


//   heads.forEach(function(head) {
//     const headPosition = head.getBoundingClientRect();
//     if (window.innerHeight > headPosition.top + 300) {
//       line.style.width = '100%';
//     // } else {
//     //   line.style.width = '0';
//     // 
//     }

//   })

// });


function addTransition(line) {
  line.style.transition = 'width 1.5s ease-out';
}

window.addEventListener('scroll', function () {
  const heads = document.querySelectorAll('.service__titles');
  heads.forEach(function (head) {
    const line = head.querySelector('.service__line'); // Находим .service__line для каждого .service__titles
    addTransition(line); // Добавляем переход к найденной линии

    const headPosition = head.getBoundingClientRect();
    if (window.innerHeight > headPosition.top + 250) {
      line.style.width = '100%';
      // } else {
      //   line.style.width = '0';
      // 
    }
  });
});


// const swiper = new Swiper('.offer__slider', {
//   slidesPerView: 'auto',
//   spaceBetween: 20,
//   slidesOffsetBefore: 0,
//   slidesOffsetAfter: 20,
//   // slidesOffsetBefore: 10,
//   // centeredSlides: true,
//   loop: true,

//   breakpoints: {
//     300: {
//       slidesPerView: 1,
//     },

//     550: {
//       slidesPerView: 2,
//     },

//     791: {
//       slidesPerView: 3,
//     },

//     1300: {
//       slidesPerView: 4,
//     },

//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// var team = false;
// var swiperTeam;
// function swiperCardTeam() {
//   const sliderElement1 = document.querySelector('.reference__slider');
//   if (window.innerWidth <= 450) {
//     if (!team && sliderElement1) {
//       team = true;
//       swiperTeam = new Swiper(sliderElement1, {
//         slidesPerView: 'auto',
//         spaceBetween: 20,
//         loop: true,
//         breakpoints: {
//           310: {
//             slidesPerView: 1,
//           },
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         }
//       });
//     }
//   } else if (team && swiperTeam !== undefined) {
//     swiperTeam.destroy();
//     swiperTeam = undefined;
//     team = false;
//   }
// }

// swiperCardTeam();
// window.addEventListener("resize", swiperCardTeam);

// const swiper1 = new Swiper(".mySwiper", {
//   spaceBetween: 40,
//   slidesPerView: 3,
//   freeMode: true,
//   watchSlidesProgress: true,
//   breakpoints: {
//     320: {
//       spaceBetween: 20,
//     },

//     768: {
//       spaceBetween: 20,
//     }

//   }
// });
// const swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper1,
//   },
// });

// const prodBtn = document.querySelectorAll('.catalog__btn');
// const tabsInfo = document.querySelectorAll('.catalog__panel-item');

// for (let item of prodBtn) {

//   item.addEventListener('click', function () {


//     for (let element of tabsInfo) {
//       element.classList.remove('catalog__panel-item--active')
//     }

//     const content = document.querySelector('#' + item.dataset.tab);
//     content.classList.add('catalog__panel-item--active')

//   })
// }

// document.addEventListener('DOMContentLoaded', () => {

//   let myBtns = document.querySelectorAll('.catalog__btn');
//   myBtns.forEach(function (btn) {

//     btn.addEventListener('click', () => {
//       myBtns.forEach(b => b.classList.remove('catalog__btn--active'));
//       btn.classList.add('catalog__btn--active');
//     });

//   });

// });

// window.addEventListener('click', function (event) {

//   let counter;

//   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

//     const testQuantity = event.target.closest('.view__quantity');
//     counter = testQuantity.querySelector('[data-counter]');

//   }


//   if (event.target.dataset.action === 'plus') {

//     counter.innerText = ++counter.innerText;

//   }

//   if (event.target.dataset.action === 'minus') {

//     if (parseInt(counter.innerText) > 1) {
//       counter.innerText = --counter.innerText;
//     }

//   }

// });


// const tabBtn = document.querySelectorAll('.view__tab-btn');
// const tabInfo = document.querySelectorAll('.view__tab-info');

// if (tabBtn && tabInfo) {
//   for (let item of tabBtn) {
//     item.addEventListener('click', function () {
//       for (let element of tabInfo) {
//         element.classList.remove('view__tab-info--active')
//       }

//       const content = document.querySelector('#' + item.dataset.tab);
//       content.classList.add('view__tab-info--active')
//     })
//   };

// }


// document.addEventListener('DOMContentLoaded', () => {
//   if (tabBtn[0] && tabInfo[0]) {
//     tabBtn[0].classList.add('view__tab-btn--active');
//     //prodBtn[0].style.borderBottom = 'none';
//     tabInfo[0].classList.add('view__tab-info--active');
//   }

//   let myBtns = document.querySelectorAll('.view__tab-btn');
//   myBtns.forEach(function (btn) {

//     btn.addEventListener('click', () => {
//       myBtns.forEach(b => b.classList.remove('view__tab-btn--active'));
//       btn.classList.add('view__tab-btn--active');
//     });

//   });

// });




// const showMoreButton = document.querySelector('.catalog__show');
// const listItems = document.querySelectorAll('.catalog__tabs-item');

// let showMoreState = true;
// if (showMoreButton) {
//   showMoreButton.addEventListener('click', () => {

//     listItems.forEach((item, index) => {
//       if (index >= listItems.length - 8) {

//         if (showMoreState) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       } else if (window.innerWidth <= 768) {
//         if (index >= listItems.length - 10) {
//           if (showMoreState) {
//             item.style.display = 'block';
//           } else {
//             item.style.display = 'none';
//           }
//         }
//       }
//     });


//     showMoreState = !showMoreState;
//     let buttonText = showMoreState ? 'Показать весь список <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14C9.41668 14 8.83335 13.775 8.39168 13.3334L2.95835 7.90003C2.71668 7.65837 2.71668 7.25837 2.95835 7.0167C3.20002 6.77503 3.60002 6.77503 3.84168 7.0167L9.27502 12.45C9.67502 12.85 10.325 12.85 10.725 12.45L16.1583 7.0167C16.4 6.77503 16.8 6.77503 17.0417 7.0167C17.2833 7.25837 17.2833 7.65837 17.0417 7.90003L11.6083 13.3334C11.1667 13.775 10.5833 14 10 14Z" fill="#675B92"/></svg>' : 'Свернуть список <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20"><g xmlns="http://www.w3.org/2000/svg" transform="matrix(-1 0 0 -1 20 20)"><path d="M10 14C9.41668 14 8.83335 13.775 8.39168 13.3334L2.95835 7.90003C2.71668 7.65837 2.71668 7.25837 2.95835 7.0167C3.20002 6.77503 3.60002 6.77503 3.84168 7.0167L9.27502 12.45C9.67502 12.85 10.325 12.85 10.725 12.45L16.1583 7.0167C16.4 6.77503 16.8 6.77503 17.0417 7.0167C17.2833 7.25837 17.2833 7.65837 17.0417 7.90003L11.6083 13.3334C11.1667 13.775 10.5833 14 10 14Z" fill="#675B92" /></g></svg>';
//     // showMoreButton.textContent = showMoreState ? 'Показать весь список' : 'Свернуть список';
//     showMoreButton.innerHTML = buttonText;
//   });

// }




// document.addEventListener('DOMContentLoaded', function () {
//   const video = document.getElementById('myVideo');
//   const playButton = document.querySelector('.single-video__icon');
//   if (playButton) {
//     playButton.addEventListener('click', function () {
//       if (video.paused) {
//         video.play();
//         playButton.style.display = 'none';
//       } else {
//         video.pause();
//       }
//     });

//   };

//   if (playButton) {
//     video.addEventListener('click', function () {
//       if (!video.paused) {
//         //video.pause();
//         playButton.style.display = 'none';
//       }
//     });

//   };

// });