import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Cart from '../Shop/Cart/Cart';
import ProductDetails from './ProductDetail/ProductDetails';
import "./Order.css"
import { deleteCart, removeFromDb } from '../../../utilities/Local';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id);
    }
    const handleDelete = () => {
        setCart([])
        deleteCart()
    }
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product =>
                        <ProductDetails
                            key={product.id}
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                        ></ProductDetails>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleDelete={handleDelete}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;