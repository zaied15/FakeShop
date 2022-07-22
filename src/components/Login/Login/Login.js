import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let [signedUser] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <p>Loading...</p>;
  }

  if (signedUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h3 style={{ width: "300px" }} className="mx-auto">
              Please Login
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: "300px" }}
              className="mx-auto"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-100"
                {...register("email", { required: true })}
              />
              <p className="text-danger">
                {errors.email?.type === "required" && "Email is required"}
              </p>
              <input
                type="password"
                placeholder="password"
                className="w-100"
                {...register("password", { required: true })}
              />
              <p className="text-danger">
                {errors.password && "Password is required"}
              </p>
              <button className="btn btn-success w-100" type="submit">
                Login
              </button>
              <p className="text-danger">{error ? error?.message : ""}</p>
            </form>
            <p style={{ width: "300px" }} className="mx-auto">
              If not registered, please{" "}
              <Link to="/register">Register here!</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
