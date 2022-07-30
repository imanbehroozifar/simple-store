import React from 'react';
import styles from './Logos.module.css'
import apple from '../../images/apple.png';
import samsuung from '../../images/samsung.png';
import xiaomi from '../../images/xiaomi.png';
const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Ho Support Us?</h3>
            <div>
                <img src={apple} alt='logo'/>
                <img src={samsuung} alt='logo'/>
                <img src={xiaomi} alt='logo' /> 
            </div>
        </div>
    );
};

export default Logos;