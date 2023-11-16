function increment(inputId) {
    var quantityInput = document.getElementById(inputId);
    var currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
}

function decrement(inputId) {
    var quantityInput = document.getElementById(inputId);
    var currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}
