import { getStoredCart } from "../../utilities/Local";

export const Loader = async () => {
    const productsData = await fetch("products.json");
    const products = await productsData.json();

    const storedProduct = getStoredCart();
    const previousCart = [];
    for (const id in storedProduct) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedProduct[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return { products, previousCart }
}