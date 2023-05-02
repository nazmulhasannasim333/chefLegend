import React from 'react';
import Banner from '../Baner/Banner';
import Chefs from '../Chefs/Chefs';
import Food from '../Food/Food';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Chefs />
            <Food />
            <UserReview />
        </div>
    );
};

export default Home;