import Button from './Button';

function Card(props) {
    return (
        <>
            <div className='card'>
                <div className='top'>
                    <h2 className='name'>Name</h2>
                    <Button color={'blue'} width={'50px'} />
                    <Button />
                </div>
                <div className='bottom'>
                    <p className='info'>Phone</p>
                    <p className='info'>Email</p>
                    <p className='info'>Location</p>
                </div>
            </div>
        </>
    );
}

export default Card;
