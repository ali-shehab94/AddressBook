import React from 'react';
import RadioButton from './RadioButton';

function SearchBar() {
    return (
        <div className='search'>
            <input className='search-bar' placeholder='Search' />
            <RadioButton />
        </div>
    );
}

export default SearchBar;
