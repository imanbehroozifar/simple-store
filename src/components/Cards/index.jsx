import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'
import iphone10 from '../../images/iphone10.jpg'
import iphone11 from '../../images/iphone11.jpg'
import iphone12 from '../../images/iphone12.jpg'
import s21 from '../../images/s21.jpg'
const Cards = () => {
    return (
        <div className={styles.container}>
            <Card img={iphone10} name="Iphne 13 pro max" cost="1100$"  />
            <Card img={iphone11} name="Iphne 13" cost="900$"  />
            <Card img={iphone12} name="Iphne 10" cost="1300$"  />
            <Card img={s21} name="Iphne x" cost="1400$"  />
        </div>
    );
};

export default Cards;