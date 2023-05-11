import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {name} = props.cart;
    console.log(props.cart)
    return (
        <div>
           <h2>{name}</h2>
        </div>
    );
};

export default Cart;