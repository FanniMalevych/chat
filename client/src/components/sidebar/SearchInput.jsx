import { useState } from 'react'

import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  
    return (
        <>
        

        <div className="search-box">
        <button className="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input type="text" className="input-search"  value={inputValue} placeholder="Type to Search..." onChange={handleInputChange}></input>
      </div>
      </>
    )
}

export default SearchInput