import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Header = ({ userName, pageTitle }) => {
    const navigate = useNavigate();
    const navigateToAddContacts = () => {
        navigate('/add_contacts');
    };
    const navigateToContacts = () => {
        navigate('/homepage');
    };
    const location = useLocation();
    return (
        <div className='header'>
            <div className='header-content'>
                <h4>{userName}</h4>
                <h1>{pageTitle}</h1>
                {location.pathname.includes('homepage') && <Button text='Add contact' handleClick={navigateToAddContacts} />}
                {location.pathname.includes('add_contacts') && <Button text='Back to contacts' handleClick={navigateToContacts} />}
            </div>
        </div>
    );
};

export default Header;
