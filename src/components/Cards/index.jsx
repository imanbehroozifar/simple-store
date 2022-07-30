import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'
import iphone from '../../images/iphone13pro.jpg'
const Cards = () => {
    return (
        <div className={styles.container}>
            <Card img={iphone} name="Iphne 13 pro max" cost="1100$"  />
            <Card img={iphone} name="Iphne 13" cost="900$"  />
            <Card img={iphone} name="Iphne 10" cost="1300$"  />
            <Card img={iphone} name="Iphne x" cost="1400$"  />
        </div>
    );
};

export default Cards;