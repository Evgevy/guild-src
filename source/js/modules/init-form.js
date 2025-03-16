const initForm = () => {
    const form = document.querySelector('form[data-form="feedback"]');
    if (form) {
        const errorMessage = form.querySelector('.form__error');
        const errorText = errorMessage.querySelector('span');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение формы
            let valid = true;

            errorMessage.classList.remove('is-active');
            errorText.textContent = ""; 

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const phoneInput = form.querySelector('input[name="phone"]');
            const personalDataCheckbox = form.querySelector('input[name="personal_data"]');

            // Проверка на заполнение имени
            if (!nameInput.value.trim()) {
                valid = false;
                errorText.textContent = "Заполните имя.";
                const customInput = nameInput.closest('.custom-input');
                if (customInput) {
                    customInput.classList.add('error');
                }
            } else {
                const customInput = nameInput.closest('.custom-input');
                if (customInput) {
                    customInput.classList.remove('error');
                }
            }

            // Проверка на заполненность хотя бы одного из полей - телефон или e-mail
            if (phoneInput.value.trim() === '' && emailInput.value.trim() === '') {
                valid = false;
                if (errorText.textContent) {
                    errorText.textContent += " ";
                }
                errorText.textContent += "Заполните хотя бы одно из полей - телефон или e-mail.";
                const phoneCustomInput = phoneInput.closest('.custom-input');
                const emailCustomInput = emailInput.closest('.custom-input');
                if (phoneCustomInput) {
                    phoneCustomInput.classList.add('error');
                }
                if (emailCustomInput) {
                    emailCustomInput.classList.add('error');
                }
            } else {
                const phoneCustomInput = phoneInput.closest('.custom-input');
                const emailCustomInput = emailInput.closest('.custom-input');
                if (phoneCustomInput) {
                    phoneCustomInput.classList.remove('error');
                }
                if (emailCustomInput) {
                    emailCustomInput.classList.remove('error');
                }
            }

            // Проверка состояния чекбокса
            if (!personalDataCheckbox.checked) {
                valid = false;
                errorText.textContent += (errorText.textContent ? ' ' : '') + "Согласитесь на обработку персональных данных.";
            }

            if (!valid) {
                errorMessage.classList.add('is-active');
                return; // Прерываем выполнение, чтобы не отправлять форму
            } else {
                // Если все поля валидны, отправляем форму
                const formData = new FormData(form);

                fetch('../../wp-content/themes/guild/handler-form.php', {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Сетевая ошибка');
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.success) {
                            showSuccessModal();
                        } else {
                            console.error('Ошибка отправки формы:', data.message);
                            errorText.textContent = data.message; // Устанавливаем текст ошибки
                            errorMessage.classList.add('is-active'); // Показываем сообщение об ошибке
                        }
                    })
                    .catch((error) => {
                        console.error('Ошибка отправки формы:', error);
                    });
            }
        });
    }

    const showSuccessModal = () => {
        const modal = document.querySelector('.modal--form-success');
        modal.classList.add('is-active');
        
        setTimeout(() => {
            modal.classList.remove('is-active'); 
            location.reload(); // Это приведет к перезагрузке через 3 секунды
        }, 3000);
    }
}

export { initForm };