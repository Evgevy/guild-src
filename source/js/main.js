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
import { initBottom } from './modules/init-bottom';
import { initLemur } from './modules/init-lemur';
import { initForm } from './modules/init-form';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCheck();
  initBottom();
  initLemur();
  
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
    initForm();
  });
});