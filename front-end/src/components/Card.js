import Button from './Button';

const Card = ({ name }) => {
    return (
        <>
            <div className='card'>
                <div className='top'>
                    <h2 className='name'>Name</h2>
                    <Button color={'red'} text='Delete' width={'50px'} />
                    <Button text='Edit Contact Info' />
                </div>
                <div className='bottom'>
                    <p className='info'>Phone</p>
                    <p className='info'>Email</p>
                    <p className='info'>RelationShip Status</p>
                    <p className='info'>Location</p>
                </div>
            </div>
        </>
    );
};

export default Card;
