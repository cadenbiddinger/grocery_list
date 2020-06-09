import React from 'react';

const styles = {
  link: {
    cursor; 'pointer',
    textDecoration: 'underline',
    color: 'red', 
    marginLeft: '5px',
    marginRight: '5px'
  }
}

const filterlink = (current, name, setFilter) => {
  if (current === name)
    return <span>{name}</span>
  else 
    return <span style={styles.link} onClick={() => setFilter(name) }>{name}</span>
}

const Footer = ({ filter, setFilter }) => (
  <div>
    { ['All', 'Active', 'Complete'].map( f => filterlink(filter, f, setFilter) ) }
  </div>
)

export default Footer;