import React from 'react';

function RadioButton({ type, value, name, text }) {
    return (
        <div>
            <input type='radio' value='Male' name='gender' /> {text}
        </div>
    );
}

export default RadioButton;
