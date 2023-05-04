import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {chefName, chefPicture, YearOfexperiences, like, numberOfRecipes, id} = chef;
    return (
        <div >
            <Link to={`/details/${id}`}>
      <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
        

     <LazyLoad height={500}>
     <img
          src={chefPicture}
          alt='book cover'
          className='object-cover w-full '
          style={{height: "430px"}}
        />
      </LazyLoad>
        <div className='bg-black h-full px-6 py-12 bg-opacity-80 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col'>
          <p className='font-semibold text-2xl'>{chefName}</p>
          <br />
          <p>Experiance: <span className='font-semibold'>{YearOfexperiences}</span></p>
          <br />
          <p>Total Likes: <span className='font-semibold'>{like}</span></p>
          <br />
          <ul>
          <span className='font-semibold'>Recipes:</span>
            {numberOfRecipes.map((item, i) => <li key={i}>{item.recipe}</li>)}
          </ul>
          <br />
          <button className="btn bg-green-500 absolute bottom-5 w-full left-0 ">View Recipes</button>
        </div>
      </div>
    </Link>
        </div>
    );
};

export default Chef;