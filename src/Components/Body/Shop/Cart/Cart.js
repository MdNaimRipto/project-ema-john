import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { deleteCart } from '../../../../utilities/Local';
import "./Cart.css"

const Cart = (props) => {
    const { cart, handleDelete } = props;
    let quantity = 0;
    let price = 0;
    let shipping = 0;
    for (const item of cart) {
        quantity = quantity + item.quantity;
        price = price + item.price * item.quantity;
        shipping = shipping + item.shipping;
    }
    const tax = parseFloat(((price * 10) / 100).toFixed(2));
    const total = price + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div>
                <p>Selected Item: {quantity}</p>
                <p>Total price: ${price}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
            </div>
            <h2>Grand Total: {total}</h2>
            <button onClick={handleDelete} className='clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            <button className='review-order'>
                <span>Review Order</span>
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;