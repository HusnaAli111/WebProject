// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let buyButton = document.getElementsByClassName('btn-buy')[0];

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Making Function
function ready() {
    // Remove Items From Cart
    const removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let button of removeCartButtons) {
        button.addEventListener("click", removeCartItem);
    }

    // Quantity Changes
    const quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let input of quantityInputs) {
        input.addEventListener("change", quantityChanged);
    }

    // Add To Cart
    const addCartButtons = document.getElementsByClassName('add-cart');
    for (let button of addCartButtons) {
        button.addEventListener("click", addCartClicked);
    }

    // Buy Button Work
    buyButton.addEventListener("click", buyButtonClicked);
}

// Buy Button
function buyButtonClicked() {
    alert("Your order is placed");
    const cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}

// Remove Items From Cart
function removeCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// Quantity Changes
function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 1) {
        input.value = 1;
    }
    updatetotal();
}

// Add to Cart
function addCartClicked(event) {
    const button = event.target;
    const shopProducts = button.parentElement;
    const title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    const price = shopProducts.getElementsByClassName('price')[0].innerText;
    const productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
}

// Add Product to Cart
function addProductToCart(title, price, productImg) {
    const cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    const cartItems = document.getElementsByClassName('cart-content')[0];
    const cartItemsNames = cartItems.getElementsByClassName('cart-product-title');

    for (let item of cartItemsNames) {
        if (item.innerText == title) {
            alert('You have already added this item to cart');
            return;
        }
    }

    const cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div> 
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);

    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updatetotal();
}

// Update Total
function updatetotal() {
    const cartContent = document.getElementsByClassName('cart-content')[0];
    const cartBoxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;

    for (let cartBox of cartBoxes) {
        const priceElement = cartBox.getElementsByClassName('cart-price')[0];
        const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

        const price = parseFloat(priceElement.innerText.replace("BD", "").trim());
        const quantity = quantityElement.value;

        total += price * quantity;
    }
    document.getElementsByClassName("total-price")[0].innerText = total + " BD";
}