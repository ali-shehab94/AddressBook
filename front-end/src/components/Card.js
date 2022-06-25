import Button from './Button';
import { FaPhone, FaMailBulk, FaHeart, FaLocationArrow } from 'react-icons/fa';
const Card = ({ name, phone, email, relationship, location }) => {
    return (
        <>
            <div className='card'>
                <div className='top'>
                    <h2 className='name'>{name}</h2>
                    <Button color={'red'} text='Delete' width={'50px'} />
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
                        {location}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card;
