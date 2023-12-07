import React, { useState, useEffect } from 'react';
import { uiUxCourses, businessAnalysisCourses, dataAnalysisCourses, frontEndCourses, backendcourses } from '../../data';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const allCourses = [...uiUxCourses, ...businessAnalysisCourses, ...dataAnalysisCourses, ...frontEndCourses, ...backendcourses];

  useEffect(() => {
    const results = allCourses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, allCourses]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowResults(true);
    }
  };

  const handleBlur = () => {
    // Delay hiding the results to allow the user to click on a suggestion
    setTimeout(() => setShowResults(false), 200);
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
            onBlur={handleBlur}
          />
        </div>
      </div>
      {showResults && (
        <div className='search-results'>
          {searchResults.length > 0 ? (
            <div>
              <h3>Search Results:</h3>
              <ul>
                {searchResults.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
