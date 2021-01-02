import React from 'react';

const Search = ({ searchValue, onChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search blog post"
        value={searchValue}
        onChange={onChange}
      />
      <span>🔎</span>
    </div>
  );
};

export default Search;
