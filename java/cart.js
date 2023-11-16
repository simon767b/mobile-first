// Function to navigate to the cart page
function goToCartPage() {
    window.location.href = "cart.html"; // Replace with the actual URL of your cart page
}

// Function to add items to the cart
function addToCart(productId) {
    // Get existing cart data or create an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Add the product to the cart with quantity 1
        cart.push({ productId, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count in the UI
    updateCartCount();
}

// Function to update the cart count in the UI
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');

    if (cartCountElement) {
        // Fetch the cart count from localStorage
        const cartCount = getCartCount();
        cartCountElement.innerText = cartCount;

        // Add a class to trigger the animation
        cartCountElement.classList.add('cart-count-update');

        // Remove the class after a short delay to allow the animation to play
        setTimeout(() => {
            cartCountElement.classList.remove('cart-count-update');
        }, 300); // Adjust the delay based on your animation duration
    }
}

// Function to get the current cart count
function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Function to handle beforeunload event
function handleBeforeUnload() {
    // Set a flag in sessionStorage to indicate that the session has ended
    sessionStorage.setItem('sessionEnded', 'true');
}

// Attach the event listener for beforeunload
window.addEventListener('beforeunload', handleBeforeUnload);

// Call the updateCartCount function on page load
updateCartCount();

// Check if the session has ended and reset the cart count if needed
const sessionEnded = sessionStorage.getItem('sessionEnded');
if (sessionEnded && !sessionStorage.getItem('cartReset')) {
    // Clear the cart data from localStorage when the session has ended
    localStorage.removeItem('cart');
    // Set a flag to indicate that the cart count has been reset
    sessionStorage.setItem('cartReset', 'true');
}





