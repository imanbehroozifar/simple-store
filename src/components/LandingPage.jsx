import React from 'react';
import Cards from './Cards';
import Banner from './Banner';
import Search from './Search'
import Logos from './Logos'
const LandingPage = () => {
    return (
        <div>
            <Banner />
            <Cards />
            <Search />
            <Logos />
        </div>
    );
};

export default LandingPage;