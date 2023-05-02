import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";


const RecipeDetails = () => {
  const details = useLoaderData();
  const [isDisabled, setIsDisabled] = useState(false)

  const handleDisabled = () => {
    setIsDisabled(true)
    toast.success('Added to favorite', {
      duration: 4000,
      position: 'right-top',
      style: {
        border: '1px solid #713200',
        marginTop: "40px",
        color: '#fff',
        background: '#0d4703'
      },
      
    })
  }

  const {
    chefName,
    chefPicture,
    YearOfexperiences,
    like,
    numberOfRecipes,
    Description,
    Ingredients,
  } = details;

  return (
    <div className="max-w-6xl mx-auto my-24">
      <div className=" overflow-hidden  bg-white border rounded shadow-sm ">
        <div className="flex flex-col pt-5  lg:flex-row sm:mx-auto">
          <div className=" lg:w-1/2 h-full px-2 py-2">
            <img
              src={chefPicture}
              alt="book cover"
              className="object-cover w-full  lg:h-full"
            />
          </div>
          <div className=" px-8 bg-white lg:px-20  lg:w-1/2">
            <p className=" text-gray-900 pt-4 text-xl py-2">
              Name: <span className="font-semibold text-2xl">{chefName}</span>
            </p>
            <p className=" text-gray-900 pt-2">
              About: <br />
              <span className=" text-gray-500 text-xl">{Description}</span>
            </p>
            <p className=" text-gray-900 pt-5">
              Experiance:{" "}
              <span className="font-semibold">{YearOfexperiences}</span>
            </p>
            <p className=" text-gray-900 py-2">
              Likes: <span className="font-semibold">{like}</span>
            </p>
            <ul>
              <span className=" ">Recipes:</span>
              {numberOfRecipes.map((sr, i) => (
                <li className="font-semibold" key={i}>
                  {sr.recipe}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 px-4">
          <h3 className="text-xl font-semibold mb-2">Recipes:</h3>
          <div className="grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-1">
            {numberOfRecipes.map((item, i) => (
              <div key={i} className="relative px-2 py-5 lg:py-2 border">
                <img className="h-64 w-full" src={item?.recipeImage} />
                <h4 className="text-xl font-semibold">{item?.recipe}</h4>
                <p className=" text-gray-900 pt-4">
                  Cooking method:
                  <br />
                  <span className="font-semibold">
                    {item?.Cooking_method.map((n, i) => (
                      <li key={i}>{n}</li>
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
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
