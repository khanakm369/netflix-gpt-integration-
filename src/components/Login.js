import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="Background"
          />
          
          {/* Form Container */}
          <div className="absolute inset-0 flex justify-center items-center">
            <form className="w-full max-w-xs p-8 bg-black bg-opacity-50 rounded text-white">

            <h1 className="font-bold text-3xl py-4">Sign In</h1>

              <input
                type="text"
                placeholder="Email Address"
                className="p-4 w-full my-4 bg-gray-700 text-white rounded opacity-50"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-4 w-full my-4 bg-gray-700 text-white rounded opacity-50"
              />
              <button
                type="submit"
                className="w-full bg-red-700 p-4 my-4 text-white rounded"
              >
                Sign In
              </button>
              <p>New to Netflix ? Sign Up Now</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
