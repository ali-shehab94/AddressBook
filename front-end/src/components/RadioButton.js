import React from 'react';
import { useState } from 'react';

const RadioButton = ({ value, name, text }) => {
    const [value, setValue] = useState;
    return (
        <div>
            <input type='radio' value={value} name='foo' onChange={(e) => setValue(e.target.value)} />
            {text}
        </div>
    );
};

export default RadioButton;
