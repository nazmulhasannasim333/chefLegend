import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Chef from '../Chef/Chef';
import LoadingData from '../LoadingData/LoadingData';

const Chefs = () => {
    const [Chefs, setChefs] = useState([])
    
 useEffect(()=> {
        fetch("https://chef-legend-server-nazmulhasannasim333.vercel.app/chefCategories")
        .then(res => res.json())
        .then(data => setChefs(data))
    },[]);
    
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
       return <LoadingData />
    }

    return (
        <div className='max-w-6xl mx-auto mt-14'>
            <div className='text-center py-14'>
                <h3 className='font-semibold text-4xl pb-4'>Focus on Quality to Find the best Chef</h3>
                <p>Industry-Focused Tools You Need to Save Time, Stand Out, and Attract Top Chef</p>
            </div>
        <div className='grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1'>
            
            {
                Chefs.map(chef => <Chef key={chef.id} chef={chef} />)
            }
        </div>
        </div>
    );
};

export default Chefs;