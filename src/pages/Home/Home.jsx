import React from 'react';
import Header from '../Shared/Header/Header/Header';
import PopularItem from '../Shared/PopularItem/PopularItem';
import Chef from '../Shared/Chef/Chef';
import Statistic from '../Shared/Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularItem></PopularItem>
            <Chef></Chef>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;