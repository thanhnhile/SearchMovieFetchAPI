import React from 'react'
import { FaSistrix } from "react-icons/fa";
function SearchInput({ inputValue, handleClick, handleChange }) {
    return (
        <div className='container'>
            <div className='search-movie'>
                <input
                    type='text'
                    placeholder="Search for a movie"
                    onChange={(e) => handleChange(e.target.value)}
                    value={inputValue}
                />
                <FaSistrix className='search-icon' onClick={handleClick} />
            </div>
        </div>
    )
}

export default SearchInput;