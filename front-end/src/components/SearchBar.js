import React from 'react';
import RadioButton from './RadioButton';

const SearchBar = () => {
    return (
        <div className='search'>
            <input className='search-bar' placeholder='Search' />
            <div className='radio-container'>
                <RadioButton text='' />
                <RadioButton />
                <RadioButton />
            </div>
        </div>
    );
};

export default SearchBar;
