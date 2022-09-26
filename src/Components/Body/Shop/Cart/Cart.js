import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cartItem } = props;
    return (
        <div>
            <h2 className='cart-header'>Order Summery</h2>
            <p>Selected Items: {cartItem.length}</p>
            <p>Total price: ${cartItem.reduce((prev, current) => prev + current.price, 0)}</p>
            <p>Delivery Charge: {cartItem.length <= 5 ? "$15" : "30"}</p>
        </div>
    );
};

export default Cart;