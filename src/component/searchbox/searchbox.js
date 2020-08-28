import React from 'react';
import './searchbox.css';

const SearchBox = (props) => {
    return(
        <div className='pa2 input'>
            <input type="text" 
                placeholder='search disciples' 
                className='pa3 ba b--green bg-lightest-blue'
                onChange={ props.onInputChange }
            />
        </div>
    )
}

export default SearchBox;