/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleProfileEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);

    profileUpdate(name, photo)
      .then(() => {
        console.log("profile updated");
        form.reset();
        navigate("/profile")

      })
      .catch(error => console.log(error))

  }

  return (
    <div className="max-w-xl lg:mx-auto mx-4 my-20 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full">
        <img
          src={user && user.photoURL}
          alt="Profile"
          className="w-64 h-64 mx-auto rounded-full mt-6 mb-4 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {user && user.displayName}
          </h2>
          <p className="text-gray-600 text-sm">Frontend Developer</p>
          <p className="text-gray-600 text-sm mt-4">Bio:</p>
          <p className="text-gray-800 mb-4">
            {user && user.displayName} was an Bangladeshi chef and television
            personality who introduced Bangladeshi cuisine to the Bangladeshi
            public. She authored several cookbooks and hosted the television
            show The Bangladeshi Chef which aired from 1990 to 2022 Running.
          </p>
          <div className="lg:flex justify-between">
            <div>
              <p className="text-gray-600 text-sm">Email:</p>
              <p className="text-gray-800">{user && user.email}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Phone:</p>
              <p className="text-gray-800">0171111111111</p>
            </div>
          </div>
          <div className="lg:flex justify-between mt-4">
            <div>
              <p className="text-gray-600 text-sm">Website:</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Nasimdroid.com
              </a>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Location:</p>
              <p className="text-gray-800">Pabna Shadar, Pabna, BD</p>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="my-modal-3" className="btn bg-green-500 my-4 ms-4 py-2 text-white border-none">
           <FaUserEdit className="h-6 w-6 me-2" /> Edit Profile
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box bg-white">
              <h3 className="font-bold text-lg bg black">
                Edit Your Profile
              </h3>
              <form onSubmit={handleProfileEdit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pt-5">
              <label className="text-black"  htmlFor="email-address" >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-black bg-white  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm "
                placeholder="Enter your name"
              />
            </div>
            <div className="pt-5">
              <label className="text-black"  htmlFor="email-address" >
                Photo URL
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                autoComplete="photo"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-400 text-black bg-white  rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm "
                placeholder="Enter your photo URL"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
           Svae Change
          </button>
        </form>
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
