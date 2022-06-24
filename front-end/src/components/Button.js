import React from 'react';

function Button({ text, color, width, handleClick }) {
    return (
        <button className='btn' onClick={handleClick} style={{ backgroundColor: color, width: width }}>
            add a contact{text}
        </button>
    );
}

export default Button;
