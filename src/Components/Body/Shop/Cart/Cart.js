import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const { cartItem } = props;
    const price = cartItem.reduce((prev, current) => prev + current.price, 0);
    const shippingCharge = cartItem.reduce((prev, current) => prev + current.shipping, 0);
    const tax = parseFloat(((price * 10) / 100).toFixed(2));
    const grandTotal = price + shippingCharge + tax;

    return (
        <div className='cart'>
            <h2 className='cart-header'>Order Summery</h2>
            <div className='cart-info'>
                <p>Selected Items: {cartItem.length}</p>
                <p>Total price: ${price}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <button className='clear-btn'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <button className='review-btn'>
                <span>Review Order</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;