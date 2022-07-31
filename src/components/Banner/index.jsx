import React from 'react';
import styles from './Banner.module.css'
import banner from '../../images/banner.jpg'
const Banner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>smartphone shop</h1>
            </div>
        </div>
    );
};

export default Banner;