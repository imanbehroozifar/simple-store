import React ,{useState} from 'react';
import styles from './Card.module.css'
import up from '../../images/up.svg'
import down from '../../images/down.svg'
const Card = ({ img, name, cost }) => {
    const [state, setState] = useState({
        counter:0
    })
    const upHandler = () => {
        setState((prevState) => ({
             counter: prevState.counter + 1
         }))
    }
     const downHandler = () => {
         if (state.counter >= 1) {
              setState((prevState) => ({
             counter: prevState.counter - 1
         }))
        }
     }
    return (
        <div className={styles.container}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{cost}{state.counter ? ` * ${state.counter} = ${cost.split(' ')[0]*state.counter} $ ` :''}</p>
            <div className={styles.counter}>
                <img className={!state.counter ? styles.deactive :''} onClick={downHandler} src={down} alt="Up" />
                <span>{state.counter}</span>
                <img  onClick={upHandler} src={up} alt="Down"/>
            </div>
        </div>
    );
};

export default Card;