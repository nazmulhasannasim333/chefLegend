/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import BannerImage from '../../assets/image/banner.png';

const Banner = () => {
    return (
        <div >
            <div className=' lg:max-w-7xl lg:mx-auto mx-8  flex flex-col lg:flex-row justify-center items-center '>
                
            <div className='pt-8'>
                <LazyLoad height={200}>
                <img  src={BannerImage} alt="" />
                </LazyLoad>
            </div>
            <div className='lg:w-1/2 w-full'>
                <h1 className='lg:text-6xl text-4xl  font-semibold py-8 leading-none'>Your Perfect Hire is on iHireChefs</h1>
                <p className='lg:text-lg text-md  lg:py-5 py-2'>Source the right talent by searching our database of 67,944 Culinary resumes (and counting). Our industry-focused approach eliminates irrelevant results so you can quickly zero in on qualified candidates..</p>
                <Link >
                <button className="bg-green-500 lg:mt-0 mt-3 text-white px-6 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                Hire Now
              </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Banner;