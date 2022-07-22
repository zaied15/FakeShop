import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    if (password === confirmPassword) {
      setPassError("");
      createUserWithEmailAndPassword(email, password);
    } else {
      setPassError("Password does not matched");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h3 style={{ width: "300px" }} className="mx-auto">
              Please Register
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
              <input
                type="password"
                placeholder="confirm password"
                className="w-100"
                {...register("confirmPassword", { required: true })}
              />
              <p className="text-danger">{passError ? passError : ""}</p>
              <button className="btn btn-success w-100" type="submit">
                Register
              </button>
              <p className="text-danger">{error ? error?.message : ""}</p>
            </form>
            <p style={{ width: "300px" }} className="mx-auto">
              Already have an account? <Link to="/login">Login here!</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
