import React from 'react';
import {useParams} from 'react-router-dom'
const DetailsPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <h1>
            DetailsPage {params.id}
            
        </h1>
    );
}
export default DetailsPage;