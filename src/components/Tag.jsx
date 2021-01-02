import React from 'react';

const Tag = ({ children }) => {
  return (
    <a href="https://google.com" style={{ marginRight: 4 }}>
      <button
        style={{
          fontSize: 12,
          padding: 6,
          border: 0,
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }}
      >
        {children}
      </button>
    </a>
  );
};

export default Tag;
