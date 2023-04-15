import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={require('../../images/header-logos.png')} alt=""/>
            <img src={require('../../images/header-logos.png')} alt=""/>
            <img src={require('../../images/header-logos.png')} alt=""/>
        </div>
    );
};

export default Header;