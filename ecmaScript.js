//1. Получение данных о пользователе

async function getUserData(userId) {
    const url = `https://example.com/users/${userId}`; // Замените на реальный URL

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`User with ID ${userId} not found`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Пример использования
getUserData(1)
    .then(user => console.log('User data:', user))
    .catch(error => console.error(error.message));

//2. Отправка данных на сервер

async function saveUserData(user) {
    const url = 'https://example.com/users'; // Замените на реальный URL

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Failed to save user data');
        }

        console.log('User data saved successfully');
    } catch (error) {
        return Promise.reject(error);
    }
}

// Пример использования
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => console.log('Data sent successfully'))
    .catch(error => console.error(error.message));
//3. Изменение стиля элемента через заданное время
function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);

        if (element) {
            element.style.backgroundColor = 'lightblue';
            element.style.color = 'white';
            element.style.padding = '10px';
            element.style.borderRadius = '5px';
        } else {
            console.error(`Element with ID "${elementId}" not found`);
        }
    }, delay);
}

// Пример использования
changeStyleDelayed('myElement', 2000); // Изменит стиль элемента через 2 секунды
