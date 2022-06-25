import React from 'react';

const Button = ({ text, color, width, handleClick }) => {
    return (
        <button className='btn' onClick={handleClick} style={{ backgroundColor: color, width: width }}>
            {text}
        </button>
    );
};

export default Button;
