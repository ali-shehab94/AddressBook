import React from 'react';
import Button from './Button';

function Header({ userName, pageTitle }) {
    return (
        <div className='header'>
            <div className='header-content'>
                <h4>user name{userName}</h4>
                <h1>page title{pageTitle}</h1>
                <Button />
            </div>
        </div>
    );
}

export default Header;
