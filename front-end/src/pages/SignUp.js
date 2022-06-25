import Header from '../components/Header';
import SignUpCard from '../components/SignUpCard';
import { useState, useEffect } from 'react';
const SignUp = () => {
    return (
        <div>
            <Header userName={'Register'} pageTitle={'Welcome to Yellow Contacts'} />
            <div className='body-wrapper'>
                <div className='signin-signup'>
                    <SignUpCard />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
