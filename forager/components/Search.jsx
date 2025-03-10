"use client";

import React, { useState } from 'react';
import FilterSettings from './FilterSettings'; // Import the FilterSettings component

const Search = () => {
  const [showFilterSettings, setShowFilterSettings] = useState(false);

  const parentContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    width: '305px',
    height: '35px',
    padding: '0 10px', // Add padding to the container
    backgroundColor: '#fff', // Add background color to the container
  };

  const searchIconStyle = {
    width: '20px',
    height: '20px',
    marginRight: '10px', // Add margin to the right to make space for the input
  };

  const searchInputStyle = {
    border: 'none',
    outline: 'none',
    flex: 1,
    borderRadius: '20px',
  };

  const filterButtonStyle = {
    cursor: 'pointer',
    height: '20px',
    width: '20px',
    background: 'none',
    border: 'none',
    padding: '0',
    marginLeft: '10px', // Add some space between the search container and the button
  };

  const handleFilterButtonClick = () => {
    setShowFilterSettings(true);
  };

  const handleCloseFilterSettings = () => {
    setShowFilterSettings(false);
  };

  return (
    <div style={parentContainerStyle}>
      <div style={searchContainerStyle}>
        <img src="/icons/icon_search.svg" alt="Search icon" style={searchIconStyle} />
        <input type="text" placeholder="Search for a mushroom" style={searchInputStyle} />
      </div>
      <button style={filterButtonStyle} onClick={handleFilterButtonClick}>
        <img src="/icons/filter_button.svg" alt="Filter button" style={{ height: '100%', width: '100%' }} />
      </button>
      {showFilterSettings && (
        <FilterSettings onClose={handleCloseFilterSettings} />
      )}
    </div>
  );
};

export default Search;