const initCheck = () => {
    const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const icon = this.nextElementSibling.querySelector('.custom-checkbox__icon'); 
            if (this.checked) {
                icon.classList.add('checked');
            } else {
                icon.classList.remove('checked');
            }
        });

        const icon = checkbox.nextElementSibling.querySelector('.custom-checkbox__icon'); 
        if (checkbox.checked) {
            icon.classList.add('checked');
        }
    });
}

export{initCheck};