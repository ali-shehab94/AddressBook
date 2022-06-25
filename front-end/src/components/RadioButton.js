import React from 'react';

const RadioButton = ({ value, name, text }) => {
    return (
        <div>
            <input type='radio' value={value} name={name} />
            {text}
        </div>
    );
};

export default RadioButton;
