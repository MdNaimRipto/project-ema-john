import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Product.css"

const Product = (props) => {
    const { product, handleAddToClick } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt=""
                onError={(event) => {
                    event.currentTarget.src =
                        "https://image.shutterstock.com/image-vector/no-image-available-icon-vector-260nw-1323742826.jpg"
                }}
            />
            <div className='info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className='more-info'>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => { handleAddToClick(product) }}>
                <span>Add to Cart</span><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default Product;