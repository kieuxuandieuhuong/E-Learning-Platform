import React, { useState } from 'react';
import { uiUxCourses, businessAnalysisCourses, dataAnalysisCourses, frontEndCourses, backendcourses } from '../../data';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const allCourses = [...uiUxCourses, ...businessAnalysisCourses, ...dataAnalysisCourses, ...frontEndCourses, ...backendcourses];

  const handleSearch = () => {
    const results = allCourses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='container search-container'>
      <div className='search-bar'>
        <div className='search-input-container'>
          <FaSearch className='search-icon' />
          <input
            type='text'
            placeholder='Search for courses...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      
        
      
    </div>
  );
};

export default SearchBar;
