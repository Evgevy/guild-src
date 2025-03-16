const addError = () => {
    const form = document.querySelector('form[data-form="feedback"]');
    if (form) {
        const errorMessage = form.querySelector('.form__error');
        const errorText = errorMessage.querySelector('span');

        form.addEventListener('submit', function (event) {
            let valid = true;

            errorMessage.classList.remove('is-active');
            errorText.textContent = ""; 

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const phoneInput = form.querySelector('input[name="phone"]');
            const personalDataCheckbox = form.querySelector('input[name="personal_data"]');

            const inputs = [nameInput, emailInput, phoneInput];

            for (const input of inputs) {
                // Проверка, что input действительно существует
                if (input) {
                    const customInput = input.closest('.custom-input'); 
                    if (!input.value.trim()) {
                        valid = false;
                        if (customInput) {
                            customInput.classList.add('error'); 
                        }
                    } else {
                        if (customInput) {
                            customInput.classList.remove('error'); 
                        }
                    }
                }
            }

            // Проверка, что хотя бы одно из полей - телефон или e-mail заполнено
            if (!valid || (phoneInput.value.trim() === '' && emailInput.value.trim() === '')) {
                valid = false;
                errorText.textContent = "Заполните имя и хотя бы одно из полей - телефон или e-mail.";
            }

            // Проверка состояния чекбокса
            if (!personalDataCheckbox.checked) {
                valid = false;
                errorText.textContent += (errorText.textContent ? ' ' : '') + "Согласитесь на обработку персональных данных.";
            }

            if (!valid) {
                event.preventDefault(); 
                errorMessage.classList.add('is-active');
            }
        });
    }
}

export { addError };