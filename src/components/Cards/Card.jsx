import React from 'react';
import styles from './Card.module.css'

const Card = ({img,name,cost}) => {
    return (
        <div className={styles.container}>
            <img src={img} alt="iphone 13pro max" />
            <h3>{name}</h3>
            <p>{cost}</p>
        </div>
    );
};

export default Card;