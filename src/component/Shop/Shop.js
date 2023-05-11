import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        console.log(newCart)
    }
    // console.log(product)
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(product=> <Product
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    key={product.id}
                    ></Product>)
                }
            </div>

            <div className="order-container">            
                <h3>Product items : {cart.length}</h3>
                <Cart></Cart>
                {
                    cart.map(cart => <Cart
                    key = {cart.id}
                    cart = {cart}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;