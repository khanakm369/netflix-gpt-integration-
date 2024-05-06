import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux';
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilities/firebase';
import { addUser, removeUser } from "../utilities/userSlice";

const Body = () => {
  const dispatch = useDispatch();
// Obtain the navigate function using useNavigate
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName , photoURL} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
        
      } else {
        dispatch(removeUser());
    
      }
    });
  }, [dispatch, ]); // Add navigate to the dependency array
  
  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  )

}

export default Body;
