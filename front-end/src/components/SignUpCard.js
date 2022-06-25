import InputAuth from './InputAuth';
import Button from './Button';
import { useState } from 'react';

const SignUpCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signUpClick() {
        console.log('clicked');
        console.log(name, email, password);
        const res = await fetch(`http://localhost:4000/api/user/auth/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ fullName: name, email: email, password: password }),
        });
        const data = await res.json();
        if (data) {
            window.location.href = '/';
        } else {
            alert('Please use a different email');
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
                <Button handleClick={signUpClick} children='Sign up' text={'Sign up'} />
            </div>
        );
    }
};
export default SignUpCard;
