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

    const deleteThis = (e) => {
        e.preventDefault();
        console.log(id);
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
