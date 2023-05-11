import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu-full'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu-main">
                    <ul>
                        <li><a href="shop">Shop</a></li>
                        <li><a href="order">Order Review</a></li>
                        <li><a href="inventory">Manage Inventory</a></li>
                        <li><a href="about">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;