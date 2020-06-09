import React from 'react';

const Grocery = ({ id, name, complete, todoClick }) => (
  <li style={ complete ? {...Styles.grocery, ...styles.complete } : styles.grocery }
    onClick={() => todoClick(id)} 
    >
    {name}
  </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: {
    color: 'grey', 
    textDecoration: 'line-through'
  },
};

export default Grocery;