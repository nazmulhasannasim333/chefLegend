import React, { useState } from 'react';
import { Toaster, toast } from "react-hot-toast";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import LazyLoad from 'react-lazyload';
import Rating from "react-rating";

const RecipeItem = ({item}) => {
    console.log(item);

    const [isDisabled, setIsDisabled] = useState(false)

  const handleDisabled = () => {
    setIsDisabled(true)
    toast.success('Added to favorite', {
      duration: 3000,
      position: 'right-top',
      style: {
        border: '1px solid #713200',
        marginTop: "40px",
        color: '#fff',
        background: '#0d4703'
      },
      
    })
  }

    return (
        <div  className="relative px-2 py-5 lg:py-2 border">
                <LazyLoad height={200}>
                <img className="h-64 w-full" src={item?.recipeImage} />
                </LazyLoad>
                <h4 className="text-xl font-semibold">{item?.recipe}</h4>
                <p className=" text-gray-900 pt-4">
                  Cooking method:
                  <br />
                  <span className="font-semibold">
                    {item?.Cooking_method.map((n, i) => (
                      <div className="pt-1" key={i}>-{n} <br /></div>
                    ))}
                  </span>
                </p>
                <p className=" text-gray-900 pt-4">
                  Ingredients: <br />
                  <span className="font-semibold">{item?.Ingredients}</span>
                </p>
                <div className="flex gap-5 pt-6 ">
                  <p className="items-center font-extrabold text-gray-600 ">
                    <Rating
                      className="pe-2"
                      readonly
                      placeholderRating={item.rating}
                      emptySymbol={
                        <FaRegStar className="text-yellow-400 h-5 w-5" />
                      }
                      placeholderSymbol={
                        <FaStar className="text-yellow-400 h-5 w-5" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-400 h-5 w-5" />
                      }
                    />
                    {item.rating}
                  </p>
                </div>
                <button onClick={handleDisabled} disabled={isDisabled} className="btn bg-green-500 border-none mt-5 absolute top-5 lg:top-0">
                <Toaster />
                  <FaHeart className="text-red-700 h-7 w-7 pe-3" /> Add to
                  Favorite{" "}
                </button>
              </div>
    );
};

export default RecipeItem;