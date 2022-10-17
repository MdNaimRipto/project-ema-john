import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"

const ProductDetails = (props) => {
    const { product, handleRemoveItem } = props;
    const { img, name, price, shipping, quantity, id } = product;
    return (
        <div className='item-container'>
            <div className='product-img'>
                <img src={img} alt=""
                    onError={(event) => {
                        event.currentTarget.src =
                            "https://image.shutterstock.com/image-vector/no-image-available-icon-vector-260nw-1323742826.jpg"
                    }}
                />
            </div>
            <div className='item-details'>
                <h3>{name}</h3>
                <p><small>Price: ${price}</small></p>
                <p><small>Shipping Charge: ${shipping}</small></p>
                <p><small>Quantity: {quantity}</small></p>
            </div>
            <div>
                <button onClick={() => { handleRemoveItem(id) }} className='delete-item'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;