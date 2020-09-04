import React from 'react';

import SearchBar from './SearchBar.jsx'

import styles from './Nav.module.css'

function Nav({ onSearch }) {
  return (
    <nav className={styles.nav +' fixed-top'}>
      <div className="content-logo">
        <h6 
          style={{
            display: 'inline-block', 
            fontSize: '16px', 
            fontWeight: '700', 
            color: 'white',
            margin: '0'}}
          >Weather App
        </h6>
      </div>
      <SearchBar 
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
