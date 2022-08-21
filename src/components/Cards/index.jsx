import React, { useState } from 'react';
import Card from './Card';
import styles from './Cards.module.css'
import iphone10 from '../../images/iphone10.jpg'
import iphone11 from '../../images/iphone11.jpg'
import iphone12 from '../../images/iphone12.jpg'
import s21 from '../../images/s21.jpg'
const Cards = () => {
    const [state, setState] = useState(
        {
            products: [
                { id: 1, name: 'Iphone10', cost: '600 $', img:iphone10},
                { id: 2, name: 'Iphone11', cost: '800 $', img:iphone11},
                { id: 3, name: 'Iphone12', cost: '1200 $', img:iphone12},
                { id: 4, name: 'S21', cost: '790 $', img:s21},
            
        ]
       }
    )
    return (
        <div className={styles.container}>
            {state.products.map((product) => <Card key={product.id} name={product.name} img={product.img} cost={product.cost} />)}
        </div>
    );
};

export default Cards;