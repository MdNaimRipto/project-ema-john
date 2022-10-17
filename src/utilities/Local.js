const addToLocal = (id) => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    const quantity = cart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else {
        cart[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const deleteCart = () => {
    localStorage.clear()
}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
    }
}

export { addToLocal, getStoredCart, deleteCart, removeFromDb }