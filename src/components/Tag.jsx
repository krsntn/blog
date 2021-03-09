import React from 'react';

const Tag = ({ children }) => {
  return (
    <button
      tabIndex="-1"
      style={{
        fontSize: 12,
        padding: 6,
        border: 0,
        borderRadius: '0.5rem',
        cursor: 'pointer',
        marginRight: 6,
      }}
    >
      {children}
    </button>
  );
};

export default Tag;
