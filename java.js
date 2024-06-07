const products = [
    { id: 1, name: "leche entera 1L", price: 27, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/entera-1l/Product-Information-Section-Leche-Entera-1lt.jpg/width1338.jpg" },
    { id: 2, name: "leche deslactosada 1L", price: 32.50, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/deslactosada-1l/Product-Information-Section-Leches-Deslactosada-1L.jpg/width1338.jpg" },
    { id: 3, name: "leche light 1L", price: 31.50, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/leche-light-1l/Product-Information-Section-Leche-Light-1L.jpg/width1338.jpg" },
    { id: 4, name: "leche semi-descremada 1L", price: 32.50, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/semi-1l/Product-Information-Section-Leches-Semi-1lt.jpg/width1338.jpg" },
    { id: 5, name: "leche deslactosada light 1L", price: 32.50, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/deslactosada-light-1l/Product-Information-Section-Leches-Deslactosada-Light-1L.jpg/width1338.jpg" },
    { id: 6, name: "leche enterita 180ML", price: 11.50, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/leches/enterita-180ml/Product-Information-Section-Leches-Enterita-180ml.jpg/width1338.jpg" },
    { id: 7, name: "leche chocolatada 180ML", price: 11, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/saborizadas/chocolate-180ml/Product-Information-Section-Saborizadas-Chocolate-180ml.jpg/width1338.jpg" },
    { id: 8, name: "leche de fresa 180ML", price: 11, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/saborizadas/fresa-180ml/Product-Information-Section-Saborizadas-Fresa-180ml.jpg/width1338.jpg" },
    { id: 9, name: "leche de fresa 180ML", price: 11, image: "https://www.coca-cola.com/content/dam/onexp/mx/es/brands/santa-clara/saborizadas/vainilla-180ml/Product-Information-Section-Saborizadas-Vainilla-180ml.jpg/width1338.jpg" },
];

const cart = [];

function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, this)">Agregar al Carrito</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(productId, button) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();

        // Agregar animación
        const productDiv = button.parentElement;
        productDiv.classList.add('added');
        setTimeout(() => {
            productDiv.classList.remove('added');
        }, 500);
    }
}

function updateCart() {
    const cartItemsUl = document.getElementById('cart-items');
    cartItemsUl.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsUl.appendChild(li);
        totalPrice += item.price;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

document.getElementById('search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
});

displayProducts(products);

function expandProduct(product) {
    product.classList.add("expanded");
    product.querySelector(".info").style.display = "block";
  }
  
  function shrinkProduct(product) {
    product.classList.remove("expanded");
    product.querySelector(".info").style.display = "none";
  }
