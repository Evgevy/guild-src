const slider1 = document.querySelector('[data-slider="cube"]'); 

const initCube = () => {
    

    
        const  swiper1 = new Swiper(slider1, {
            effect: "cube",
            grabCursor: true,
            loop: true,
            speed: 1000,
            cubeEffect: {
                shadow: true,
                slideShadows: true, // Включите slideShadows, если необходимо
                shadowOffset: 20,
                shadowScale: 0.94,
            },  
            autoplay: {
                delay: 2600,
                pauseOnMouseEnter: true,
            },
            watchSlidesVisibility: true,
        });
    

}

export{initCube};