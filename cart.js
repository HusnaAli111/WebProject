// Get the elements
const openCart = document.getElementById('open-cart');
const closeCart = document.getElementById('close-cart');
const cart = document.getElementById('cart');

// Open the cart when the "CART" link is clicked
openCart.addEventListener('click', function() {
    cart.style.right = '0'; // Slide in the cart
});

// Close the cart when the close button is clicked
closeCart.addEventListener('click', function() {
    cart.style.right = '-100%'; // Slide out the cart
});