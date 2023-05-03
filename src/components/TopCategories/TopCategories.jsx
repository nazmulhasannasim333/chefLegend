import React from 'react';
import LazyLoad from 'react-lazyload';

const categories = [
    {
      title: "APPETIZERS",
      image: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "SALADS",
      image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "KATI ROLLS",
      image: "https://images.pexels.com/photos/628777/pexels-photo-628777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "AFGHANI KABAB",
      image: "https://images.pexels.com/photos/1618917/pexels-photo-1618917.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      title: "KABAB ENTREES",
      image: "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "BEEF ENTREES",
      image: "https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "LAMB ENTREES",
      image: "https://images.pexels.com/photos/904349/pexels-photo-904349.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      title: "DESSERT ",
      image: "https://images.pexels.com/photos/144432/pexels-photo-144432.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
  ];

const TopCategories = () => {
    return (
        <div className='max-w-6xl lg:mx-auto mx-3 mt-14'>
            <div className='text-center py-14'>
                <h3 className='font-bold text-4xl'>Top Categories</h3>
            </div>
            <div  className='grid gap-8 mb-8 lg:grid-cols-4 sm:grid-cols-1'>
            {
                categories.map((item, i) => 
                <div key={i} className="  bg-[#2e442b0f] text-center lg:text-start py-12 px-7 rounded-xl cursor-pointer  shadow-md">
                <div className="rounded-2xl ">
                  <LazyLoad height={200}>
                  <img className="h-20 w-32 mx-auto rounded-md"  src={item.image} alt="" />
                  </LazyLoad>
                </div>
                <div>
                  <h3 className="text-2xl font-bold pt-6 text-center">{item.title}</h3>
                </div>
              </div>
                 )
            }
        </div> 
        </div>
    );
};

export default TopCategories;