import React from 'react';

const Tag = ({ children }) => {
  return (
    <button
      tabIndex="-1"
      style={{
        fontSize: 12,
        padding: 6,
        border: 0,
        border: '4px solid var(--color-gray)',
        borderTop: '2px solid white',
        borderLeft: '2px solid white',
        backgroundColor: 'var(--color-background)',
        cursor: 'pointer',
        marginRight: 6,
      }}
    >
      {children}
    </button>
  );
};

export default Tag;
