import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Tippy from "@tippyjs/react/headless";
import Wrapp from './Wrapp';

function SearchBar ()  {
 const [searchResult, setSearchResult] =useState ([])
useEffect (() => {
  setTimeout(() => {
    setSearchResult ([1,2,3]);
  },1000);
},[]);

  return (
    <div className='container search-container'>
       <Tippy
       interactive
        visible ={searchResult.length > 0}
          render={(attrs) => (
            <Wrapp className='search-wrapper'>
              <div className='search-result' tabIndex="-1" {...attrs} >
              UI Design Fundamentals<br></br>
              UI Design Fundamentals
          </div>
          </Wrapp>
        )}
          >
      <div className='search-bar'>
        <div className='search-input-container'>
          <input
            type='text'
            placeholder='Search for courses...'
          />
          
          <button className='search-icon' >
            <FaSearch />
          </button>
          
          </div>
          </div>
          </Tippy>
        
        
      </div>
      
        
      
    
  );
};

export default SearchBar;
