import React ,{useState} from 'react';
import styles from './Search.module.css'
const Search = () => {
    const [state, setState] = useState({
        value:''
    })
    const changeHandler = (e) => {
      setState({value:e.target.value})  
    }
    return (
        <>
          <div className={styles.container}>
            <p>Search What you want</p>
                <div>
                    <input onChange={changeHandler} type="text" placeholder="Search ..." />
                    <br/>
                    <br/>
                    <span>{state.value}</span>
                </div>
          </div>
        </>
    );
};

export default Search;