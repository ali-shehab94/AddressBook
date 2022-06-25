import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ userName, pageTitle }) => {
    const location = useLocation();
    return (
        <div className='header'>
            <div className='header-content'>
                <h4>{userName}</h4>
                <h1>{pageTitle}</h1>
                {location.pathname.includes('homepage') && <Button text='Add contact' />}
            </div>
        </div>
    );
};

export default Header;
