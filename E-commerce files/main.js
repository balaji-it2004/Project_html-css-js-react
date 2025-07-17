// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to handle the button click
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the product data
        const product = button.dataset.product;
        const price = button.dataset.price;

        // Add product to the local storage cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const newProduct = {
            name: product,
            price: price
        };

        cart.push(newProduct);

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Optional: Alert user
        alert(`${product} added to cart!`);
    });
});
