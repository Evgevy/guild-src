let animationTriggered = false; 
const initLemur = () => {
    const formSection = document.querySelector('.form'); 
    const bgBottom = document.querySelector('.form__bg-bottom'); 

    const formRect = formSection.getBoundingClientRect();
    
    if (!animationTriggered && formRect.top <= window.innerHeight && formRect.bottom > 0) {
        if (window.scrollY > formRect.top + 300 && window.innerWidth >=1280) {
            
            setTimeout(() => {
                bgBottom.classList.add('visible'); 
                animationTriggered = true; 
            }, 1000); 
        } else if(window.scrollY > formRect.top + 500) {
            setTimeout(() => {
                bgBottom.classList.add('visible'); 
                animationTriggered = true; 
            }, 1000); 
        }
    }
};

window.addEventListener('load', initLemur);
window.addEventListener('scroll', initLemur);

export { initLemur };
