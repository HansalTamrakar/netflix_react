import React from "react";
import Login from "./Login";
import BrowseComponent from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <BrowseComponent />,
  },
]);

export default Body;
