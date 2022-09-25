import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newItem = [...cartItem, product];
        setCartItem(newItem);
    };
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div >
            <div className='cart-container'>
                <h2>Order Summery</h2>
                <p>Selected Items: {cartItem.length}</p>
                <p>Total price: ${cartItem.reduce((prev, current) => prev + current.price, 0)}</p>
                <p>Delivery Charge: {cartItem.length <= 5 ? "$15" : "30"}</p>
            </div>
        </div>
    );
};

export default Shop;