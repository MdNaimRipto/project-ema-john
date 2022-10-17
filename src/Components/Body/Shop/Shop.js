import React, { useEffect, useState } from 'react';
import { addToLocal, deleteCart, getStoredCart } from '../../../utilities/Local';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import "./Shop.css"
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        console.log(savedCart)
        setCart(savedCart);
    }, [products])
    const handleAddToClick = (item) => {
        let newItem = [];
        const exists = products.find(product => product.id === item.id);
        if (!exists) {
            item.quantity = 1;
            newItem = [...cart, item];
        }
        else {
            const rest = products.filter(product => product.id !== item.id);
            exists.quantity = exists.quantity + 1;
            newItem = [...rest, exists]
        }
        setCart(newItem);
        addToLocal(item.id)
    }
    const handleDelete = () => {
        setCart([])
        deleteCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToClick={handleAddToClick}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleDelete={handleDelete}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;