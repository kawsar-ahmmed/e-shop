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
    const handleAddToCart = (selectedProduct) => {
        // eslint-disable-next-line eqeqeq
        let newCart = [];
        const exists = cart.find(product=> product.id === selectedProduct);
        if (!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists +1;
            newCart = [...rest, exists];
        }
        setCart(newCart)
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
                <Cart cart = {cart}
                key={cart.id}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;