import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    setLoading(true);
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        setError(false);
        console.log(result.user);
        const loggedInUser = result.user;

        updateProfile(loggedInUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("Updated profile");
          })
          .catch((error) => {
            console.log(error);
          });
        setSuccess(true);
        setLoading(false);
        event.target.reset();
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
      });
    console.log(name, image, email, password);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-600">Register</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="image"
                name="image"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered bg-white"
                required
              />
            </div>
            {success ? (
              <p className="bg-success text-white p-3 mt-4 text-center rounded">
                User registration successfully
              </p>
            ) : error ? (
              <p className="bg-error text-white p-3 mt-4 text-center rounded">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-orange-500 text-white border-0 hover:bg-orange-600">
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
            <small className="text-center mt-3">
              Aleady have account?{" "}
              <Link to="/login" className="link link-hover">
                login here
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
