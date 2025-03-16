const initForm = () => {
    const addtForm = () => {
        const forms = document.querySelectorAll('[data-form="feedback"]');

        if (forms.length) {
            forms.forEach((form) => {
                form.addEventListener('submit', (evt) => {
                    evt.preventDefault(); // Предотвращаем стандартное поведение формы

                    const formData = new FormData(form);

                    fetch('../../wp-content/themes/guild/handler-form.php', {
                        method: 'POST',
                        body: formData,
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Сетевая ошибка'); // Обработка ошибок сети
                            }
                            return response.json(); // Обработка ответа в формате JSON
                        })
                        .then(data => {
                            // Предполагаем, что ответ от сервера содержит статус успеха
                            if (data.success) {
                                showSuccessModal(); // Показываем модальное окно
                            } else {
                                console.error('Ошибка отправки формы:', data.message); // Обработка ошибки, если success не true
                            }
                        })
                        .catch((error) => {
                            console.error('Ошибка отправки формы:', error); // Логирование ошибки
                        });
                });
            });
        }
    }

    const showSuccessModal = () => {
        
        const modal = document.querySelector('.modal--form-success');
        modal.classList.add('is-active');

       
        setTimeout(() => {
            modal.classList.remove('is-active'); 
            location.reload();
        }, 3000);
    }

    addtForm();
}

export { initForm };