import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-descriptions">
                <h2>{name}</h2>
                <h4>Price : {price}</h4>
                <p>Ratings : {ratings} Stars</p>
                <div className="button">
                    <button onClick={()=>props.handleAddToCart(props.product)}>Add to cart 
                    <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;