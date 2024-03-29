import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { user, loginUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    loginUser(email, password)
      .then((result) => {
        setError(false);
        console.log(result);
        setSuccess(true);
        setLoading(false);
        event.target.reset();
        navigate(from);
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
      });

    console.log(email, password);
  };

  const handleSignInWithGoogle = () => {
    console.log(email, password);
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate(from);
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };

  const handleSignInWithGithub = () => {
    console.log(email, password);
    signInWithGithub()
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-orange-600">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={emailInput}
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
                onBlur={passwordInput}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered bg-white"
                required
              />
              <label className="label">
                <Link
                  to="/forget_password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            {success ? (
              <p className="bg-success text-white p-3 mt-4 text-center rounded">
                User signed in successfully
              </p>
            ) : error ? (
              <p className="bg-error text-white p-3 mt-4 text-center rounded">
                {errorMessage}
              </p>
            ) : (
              ""
            )}
            <div className="form-control mt-6">
              <button disabled={user} type="submit" className="btn bg-orange-500 text-white border-0 hover:bg-orange-600">
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <small className="text-center mb-3">or</small>

          <div className="flex justify-center gap-3">
            <div>
              <button
                disabled={user}
                onClick={handleSignInWithGoogle}
                className="btn bg-orange-500 text-white border-0 hover:bg-orange-600 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                  fill="white"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>
            </div>
            <div>
              <button
                disabled={user}
                onClick={handleSignInWithGithub}
                className="btn bg-orange-500 text-white border-0 hover:bg-orange-600 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 496 512"
                  fill="white"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </button>
            </div>
          </div>
          <small className="text-center mt-3 mb-10">
            Have no account?{" "}
            <Link to="/register" className="link link-hover">
              register now
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
