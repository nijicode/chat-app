import React, { useState } from "react";
import Gender from "./Gender";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div>
      <div className="card p-6 flex flex-col justify-center w-screen h-screen md:h-fit bg-gray-400 md:rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 md:w-full md:max-w-md shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-3xl">Sign up</h1>
        <form className="card-body flex-none " onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Name:"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Username:"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                className="grow"
                placeholder="Password:"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                className="grow"
                placeholder="ConfirmPassword:"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </label>
          </div>
          <div className="form-control">
            <Gender
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
            <label className="label ml-auto">
              <Link
                to="/login"
                className="font-semibold label-text-alt link link-hover"
              >
                already have account?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn " disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
