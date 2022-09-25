import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


import "./Product.css"


const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    const { product, handleAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <div className='other-info'>
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Rating: {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => { handleAddToCart(product) }} className='buyNow-btn'>
                Add to Cart
                <FontAwesomeIcon className='cart-icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    )
}
export default Product;