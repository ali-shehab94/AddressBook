import Header from '../components/Header';

import AddForm from '../components/AddForm';

const AddContacts = () => {
    const userName = localStorage.getItem('userName');

    return (
        <div>
            <Header userName={userName} pageTitle='Add a contact' />
            <div className='body-wrapper'>
                <AddForm />
            </div>
        </div>
    );
};

export default AddContacts;
