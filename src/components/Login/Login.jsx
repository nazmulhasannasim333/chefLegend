/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";




const Login = () => {

  const {loginUser, googleLogin, githubLogin} = useContext(AuthContext);
  const [showError, setShowError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email, password);

    setShowError("")

    loginUser(email, password)
    .then(result => {
      const loginUser = result.user;
      console.log(loginUser);
      form.reset();

      navigate('/')
    })
    .catch(error => {
      console.log(error);
      setShowError(error.message)
    })
    
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const signinGogle = result.user;
      console.log(signinGogle);
      navigate("/")
    })
    .catch(error => console.log(error))
  }
  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      const signinGithub = result.user;
      console.log(signinGithub);
      navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className="max-w-xl lg:mx-auto mx-4 my-32">
      <div className="lg:p-12 p-5 w-full bg-white rounded-lg shadow-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pt-5">
              <label htmlFor="email-address" >
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm "
                placeholder="Enter Email address"
              />
            </div>
            <div className="pt-5">
              <label htmlFor="password" >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm "
                placeholder="Enter Password"
              />
            </div>
          </div>
            
            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot your password?
              </Link>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        <p className="text-center text-red-500 pt-5">{showError && showError}</p>
        <p className="text-center pt-5">Don't have an account? <Link className="text-green-500" to="/register">Register</Link></p>
        <button onClick={handleGoogleLogin} className="btn btn-outline  w-full mt-10"><FaGoogle className="text-green-500 text-4xl pe-3"/> Login with Google</button>
        <button onClick={handleGithubLogin} className="btn btn-outline  w-full mt-5"><FaGithub className="text-black text-4xl pe-3"/> Login with Github</button>
        
      </div>
    </div>
  );
};

export default Login;