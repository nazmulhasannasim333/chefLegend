import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Baner/Banner';
import Chefs from '../Chefs/Chefs';
import Food from '../Food/Food';
import TopCategories from '../TopCategories/TopCategories';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner />
            <TopCategories />
            <Chefs />
            <Food />
            <UserReview />
        </div>
    );
};

export default Home;