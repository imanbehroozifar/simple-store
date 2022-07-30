import React from 'react';
import styles from './Search.module.css'
const Search = () => {
    return (
        <div className={styles.container}>
            <p>Search What you want</p>
            <input type="text" placeholder="Search ..."/>
        </div>
    );
};

export default Search;