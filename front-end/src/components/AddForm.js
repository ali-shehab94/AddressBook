import InputAuth from '../components/InputAuth';
import Button from '../components/Button';
import { useState } from 'react';
import Dropdown from './Dropdown';

const AddForm = () => {
    const userId = localStorage.getItem('userId');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const addContact = async (e) => {
        console.log('clicked');
        const res = await fetch(`http://localhost:4000/api/contact/add_contact`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ fullName: fullName, phoneNumber: phoneNumber, relationshipStatus: relationshipStatus, email: email, location: location, user: userId }),
        });
        const data = await res.json();
        if (data) {
            console.log(data);
            alert('Contact added');
        } else {
            alert('Please use a different email');
        }
    };
    const addClick = (e) => {
        e.preventDefault();
        addContact();
    };
    return (
        <form className='card'>
            <InputAuth
                placeholderText={'Name'}
                onChange={(e) => {
                    setFullName(e.target.value);
                }}
            />
            <InputAuth
                placeholderText={'Phone number'}
                onChange={(e) => {
                    setPhoneNumber(e.target.value);
                }}
            />
            <InputAuth
                placeholderText={'email'}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <Dropdown
                onChange={(e) => {
                    setRelationshipStatus(e.target.value);
                    console.log(e.target.value);
                }}
            />
            <Button handleClick={(e) => addClick(e)} text='Add to contacts' />
        </form>
    );
};

export default AddForm;
