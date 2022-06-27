import React from 'react';
import { useState } from 'react';

const RadioButton = ({ value, name, text }) => {
    return (
        <div>
            <input type='radio' value={value} name='foo' />
            {text}
        </div>
    );
};

export default RadioButton;
