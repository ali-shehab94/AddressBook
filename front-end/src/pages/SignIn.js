import Header from '../components/Header';
import SignInCard from '../components/SignInCard';

const SignIn = () => {
    return (
        <div>
            <Header userName={'Sign in'} pageTitle={'Welcome to Yellow Contacts'} />
            <div className='body-wrapper'>
                <div className='signin-signup'>
                    <SignInCard />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
