import React from 'react';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick} style={{ color: 'red' }}>
      {value}
    </button>
  );
}

export default Square;
