import Header from '../components/Header';
import SignInCard from '../components/SignInCard';

const SignIn = (userName, pageTitle) => {
    return (
        <div>
            <Header userName={'Please Login'} pageTitle={'Welcome to Yellow Contacts'} />
            <div className='body-wrapper'>
                <div className='signin-signup'>
                    <SignInCard />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
