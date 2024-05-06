import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utilities/Validation';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);



    const handleButtonClick = () => {

     const message = checkValidateData(email.current.value , password.current.value)
     setErrorMessage(message)
    
    
      if(message) return;

      if(!isSignInForm) {
        // Sign Up Logic
        createUserWithEmailAndPassword(
            auth,
            email.current.value ,
            password.current.value
        )
        .then((userCredential) => {
            const user = userCredential.user; // Define user here
            updateProfile(user, {
                displayName: name.current.value,
                photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fscreenrant.com%2Fdeathstroke-hero-villain-reason-explained-dc-comics%2F&psig=AOvVaw0-o78iTfu_ZS2lyJiNUu9M&ust=1715098072836000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPj5ur60-YUDFQAAAAAdAAAAABAE"
            }).then(() => {
                if (user) {
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(
                        addUser({ 
                            uid: uid, 
                            email: email, 
                            displayName: displayName, 
                            photoURL: photoURL 
                        })
                    );
                } else {
                    dispatch(removeUser());
                }
                navigate("/browse");
            }).catch((error) => {
                setErrorMessage(error.message)
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage)
        });

      } else {
        // Sign In Logic
        signInWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value
        )
        .then((userCredential) => {
            const user = userCredential.user; // Define user here
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({ 
                        uid: uid, 
                        email: email, 
                        displayName: displayName, 
                        photoURL: photoURL 
                    })
                );
            } else {
                dispatch(removeUser());
            }
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
        });
        


      }


    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the form submission logic
    };

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
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-xs p-8 bg-black bg-opacity-50 rounded text-white"
                        >
                            <h1 className="font-bold text-3xl py-4">
                                {isSignInForm ? "Sign In" : "Sign Up"}
                            </h1>

                            {!isSignInForm && (
                              <input 
                                ref = {name}
                                type="text"
                                placeholder="Full Name"
                                className="p-4 my-4 w-full bg-gray-700 opacity-50"
                              />
                            )}

                            <input
                                ref = {email}
                                type="text"
                                placeholder="Email Address"
                                className="p-4 w-full my-4 bg-gray-700 text-white rounded opacity-50"
                            />
                            <input
                                ref = {password}
                                type="password"
                                placeholder="Password"
                                className="p-4 w-full my-4 bg-gray-700 text-white rounded opacity-50"
                            />
                            <p className="text-red-700 font-bold">{errorMessage}</p>

                            <button
                                type="submit"
                                className="w-full bg-red-700 p-4 my-4 text-white rounded" onClick={handleButtonClick}
                            >
                                {isSignInForm ? "Sign In" : "Sign Up"}
                            </button>
                            <p
                                className="py-4 cursor-pointer"
                                onClick={toggleSignInForm}
                            >
                                {isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now."}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
