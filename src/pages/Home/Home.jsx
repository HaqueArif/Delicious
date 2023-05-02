import React from 'react';
import Header from '../Shared/Header/Header/Header';
import PopularItem from '../Shared/PopularItem/PopularItem';
import Chef from '../Shared/Chef/Chef';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularItem></PopularItem>
            <Chef></Chef>
        </div>
    );
};

export default Home;