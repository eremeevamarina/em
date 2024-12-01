// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(Спасибо за ваше сообщение, ${name}! Мы свяжемся с вами по email: ${email}.);
        document.getElementById('contact-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

.products {
    display: flex;
    gap: 20px;
}

.product {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
}

.product button {
    background: #333;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

// Элементы корзины
const cart = [];
const cartElement = document.getElementById('cart');
const totalPriceElement = document.getElementById('total-price');

// Функция обновления корзины
function updateCart() {
    cartElement.innerHTML = ''; // Очистка корзины
    let total = 0;

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Корзина пуста.</p>';
    } else {
        cart.forEach((item) => {
            total += item.price * item.quantity;
            cartElement.innerHTML += `
                <div>
                    ${item.name} x ${item.quantity} = ${item.price * item.quantity}₸
                </div>
            `;
        });
    }

    totalPriceElement.textContent = Общая стоимость: ${total}₸;
}

// Обработчик нажатия кнопки "Добавить в корзину"
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseInt(product.dataset.price);

        // Проверка, есть ли товар в корзине
        const existingProduct = cart.find((item) => item.id === id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        // Обновляем корзину
        updateCart();
    });
});
console.log(${name} добавлен в корзину!);
