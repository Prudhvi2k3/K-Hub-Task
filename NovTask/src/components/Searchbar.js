// SearchBar.js
import React from 'react';
import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." style={{ width: '100%' }} />
      <button type="button">Search</button>
    </div>
  );
};

export default Searchbar;
