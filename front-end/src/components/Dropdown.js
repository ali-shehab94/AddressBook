import RadioButton from './RadioButton';

const Dropdown = () => {
    return (
        <div className='dropdown'>
            <button className='dropbtn'>Relationship Status</button>
            <div className='dropdown-content'>
                <RadioButton value='0' />
                Single
                <RadioButton value='1' />
                In a Relationship
                <RadioButton value='2' />
                It's complicated
            </div>
        </div>
    );
};

export default Dropdown;
