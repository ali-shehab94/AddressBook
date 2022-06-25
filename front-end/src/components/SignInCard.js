import InputAuth from './InputAuth';
import Button from './Button';
import { useState } from 'react';

const SignInCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function signInClick() {
        console.log('clicked');
        console.log(email, password);
        const res = await fetch(`http://localhost:4000/api/user/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });
        const data = await res.json();
        console.log('datat =>', data);
        if (!data.error) {
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userName', data.userName);
            localStorage.setItem('userToken', data.userToken);
            window.location.href = '/homepage';
        } else {
            alert('Wrong username or password');
        }
        return data.error;
    }

    return (
        <div className='auth-card'>
            <h1>Sign in</h1>
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
            <Button handleClick={signInClick} children='Sign in' text={'Sign in'} />
            <h5>
                Dont have an account? <a href='/sign_up'>Sign up</a>
            </h5>
        </div>
    );
};

export default SignInCard;
