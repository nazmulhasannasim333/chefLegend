/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user} = useContext(AuthContext);
  

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
      </div>
    </div>
  );
};

export default UserProfile;
