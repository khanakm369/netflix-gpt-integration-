import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  // Create a router instance
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

  // Use RouterProvider to utilize the router
  return (
    <RouterProvider router={appRouter} />
  );
}

export default Body;
