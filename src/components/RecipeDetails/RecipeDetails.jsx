import React from "react";

import LazyLoad from "react-lazyload";
import { useLoaderData } from "react-router-dom";
import RecipeItem from "../RecipeItem/RecipeItem";


const RecipeDetails = () => {
  const details = useLoaderData();
  

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
            <LazyLoad height={200} >
            <img
              src={chefPicture}
              alt="book cover"
              className="object-cover w-full  lg:h-full"
            />
            </LazyLoad>
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
            {numberOfRecipes.map((item, i) => <RecipeItem key={i} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
