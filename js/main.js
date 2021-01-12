const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
];


const renderProduct = (id, title = "Название товара", price = "0.00", image = "placeholder-250x250.png", description = "Описание товара") => `<div class="product-item">
                <img src="img/${image}" alt="${title}" class="product-img">
                <h3 class="product-item-title">${title}</h3>
                <p class="product-item-description">${description}</p>
                <p class="product-item-price">${price} руб.</p>
                <button class="btn-cart" data-id="${id}">Добавить</button>
            </div>`;

const render = productsList => {
    const productsElements = productsList.map(item => renderProduct(item.id, item.title, item.price, item.image, item.description));

    for (let i = 0; i < productsElements.length; i++) {
        document.querySelector('.products').innerHTML += productsElements[i];
    }

};

render(products);