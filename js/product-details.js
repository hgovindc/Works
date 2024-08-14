document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Fetch product details if product ID is available
    if (productId) {
        fetchProductDetails(productId);
    }
});

async function fetchProductDetails(productId) {
    try {
        // Fetch product details from the API
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

function displayProductDetails(product) {
    // Get the element where the product details will be displayed
    const productDetails = document.getElementById('product-details');
    const breadcrumbTitle = document.getElementById('product-title-breadcrumb');

    // Set breadcrumb title
    breadcrumbTitle.textContent = product.title;

    // Populate product details HTML
    productDetails.innerHTML = `
        <div class="product-detail-card">
            <div class="product-image">
                <img src="${product.thumbnail}" alt="${product.title}" class="product-thumbnail">
            </div>
            <div class="product-info">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p><b>$${product.price}</b></p>
                <div><button class="rating">${product.rating}</button></div>
                <span class="discount">${Math.ceil(product.discountPercentage)}% Off</span>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;

    // Attach event listener to the "Add to Cart" button
    document.querySelector('.add-to-cart-btn').addEventListener('click', addToCart);
}

function addToCart(event) {
    // Get product ID from the button's data-id attribute
    const productId = event.target.getAttribute('data-id');
    
    // Retrieve cart from local storage or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product is already in the cart
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    } else {
        alert('Product already in cart!');
    }
}
