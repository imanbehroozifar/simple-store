import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../Cards/Card';
import styles from './Products.module.css'
const Products = () => {
    const [state, setState] = useState({
        products: [],
    })
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setState({ products: response.data})) 
    });
    return (
        <div className={styles.container}>
            {state.products.length ? 
            
                state.products.map((product) => <Card key={product.id} name={product.title} img={product.image} cost={`${product.price} $`} />)
                
                : <h1>loading...</h1>
            }
            
        </div>
    );
};

export default Products;