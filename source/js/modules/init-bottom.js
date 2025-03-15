const initBottom = () => {
    const items = document.querySelectorAll('.advent__item');

    items.forEach((item, index) => {
       
        item.classList.remove('second', 'third');

        
        if (window.matchMedia("(max-width: 1023px)").matches) {
            
            if ((index + 1) % 2 === 0) {
                item.classList.add('second');
            }
        } else {
            
            if ((index + 1) % 3 === 2) {
                item.classList.add('second');
            }

            if ((index + 1) % 3 === 0) {
                item.classList.add('third');
            }
        }
    });
    window.addEventListener('resize', initBottom);
}

export { initBottom };