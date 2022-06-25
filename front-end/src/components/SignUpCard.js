import InputAuth from './InputAuth';
import Button from './Button';
import { useState, useEffect } from 'react';
const SignUpCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleClick() {
        console.log(email, password);
        const res = await fetch(`http://127.0.0.1:8000/api/no_auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });
        const data = await res.json();
        console.log(data.status);
        if (!data.error) {
            localStorage.setItem('user_id', data.user.id);
            localStorage.setItem('user_type', data.user.user_type == 1 ? 'admin' : 'user');
            localStorage.setItem('access_token', data.authorisation.token);
            window.location.href = '/homepage';
        } else {
            alert('Wrong username or password');
        }
        return data.error;
    }
    return (
        <div className='auth-card'>
            <h1>Sign Up</h1>
            <InputAuth
                placeholderText='Full name'
                type='text'
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <InputAuth
                placeholderText='Enter you email'
                type='text'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <InputAuth
                placeholderText='Enter you Password'
                type='password'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button onClick={handleClick} children='Sign up' text={'Sign up'} />
        </div>
    );
};

export default SignUpCard;
