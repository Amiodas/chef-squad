import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-orange-700 py-16">
      <div
        id="error-page"
        className="container min-h-full mx-auto text-white text-center"
      >
        <div className="flex justify-center">
          <img width={150} src="/src/assets/error.png" alt="" />
        </div>
        <h1 className="text-2xl mt-5 mb-2">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="mb-8">
          <i>{error?.statusText || error?.message}</i>
        </p>
        <Link to="/">
          <button className="btn btn-outline text-white px-16 font-bold hover:bg-white">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
