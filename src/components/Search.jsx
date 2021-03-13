import React from 'react';

const Search = ({ searchValue, onChange, postCount }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search blog post"
        value={searchValue}
        onChange={onChange}
      />
      <span>{postCount}</span>
    </div>
  );
};

export default Search;
