import Button from './Button';
import { FaPhone, FaMailBulk, FaHeart, FaLocationArrow } from 'react-icons/fa';
const Card = ({ name, phone, email, relationship, location, id }) => {
    if (relationship === 0) {
        relationship = 'Single';
    } else if (relationship === 1) {
        relationship = 'In a relationship';
    } else if (relationship === 2) {
        relationship = "It's complicated";
    }

    const deleteContact = async () => {
        try {
            const res = await fetch(`http://localhost:4000/api/contact/delete_contact?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const response = await res.json();
            console.log(response);
            if (response.message === 'Contact deleted successfully') {
                alert(response.message);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const deleteThis = (e) => {
        console.log(id);
        e.preventDefault();
        deleteContact();
        // async function deleteContact(id) {
        //     console.log('triggered');
        //     const res = await fetch(`http://localhost:4000/api/contact/delete_contact?id=${id}`, {
        //         method: 'DELETE',
        //         headers {
        //             "Content-type": "application/json"
        //         }
        //     });
        //     res.status === 200 ? alert('Contact deleted') : alert('Error deleting contact');
        //     console.log(res.status);
        // }
    };

    return (
        <>
            <div className='card'>
                <div className='top'>
                    <h2 className='name'>{name}</h2>
                    <Button color={'red'} text='Delete' width={'50px'} handleClick={(e) => deleteThis(e)} />
                    <Button text='Edit Contact Info' />
                </div>
                <div className='bottom'>
                    <p className='info'>
                        <FaPhone className='icon' />
                        {phone}
                    </p>
                    <p className='info'>
                        <FaMailBulk className='icon' />
                        {email}
                    </p>
                    <p className='info'>
                        <FaHeart className='icon' />
                        {relationship}
                    </p>
                    <p className='info'>
                        <FaLocationArrow className='icon' />
                        <a href='#'>{location}</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card;
