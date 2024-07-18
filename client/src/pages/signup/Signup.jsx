import React from "react";
import Gender from "./Gender";

const Signup = () => {
  return (
    <div>
      <div class="card p-6 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 w-full max-w-md shrink-0 shadow-2xl">
        <h1 className="text-center font-bold text-3xl">Sign up</h1>
        <form class="card-body">
          <div class="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Name:
              <input type="text" className="grow" placeholder="Juan" />
            </label>
          </div>
          <div class="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Username:
              <input type="text" className="grow" placeholder="Juan01" />
            </label>
          </div>
          <div class="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Password:
              <input type="text" className="grow" placeholder="@my6fatDogs" />
            </label>
          </div>
          <div class="form-control">
            <label className="input input-bordered flex items-center gap-2">
              ConfirmPassword:
              <input
                type="password"
                className="grow"
                placeholder="@my6fatDogs"
              />
            </label>
          </div>
          <div className="form-control">
            <Gender />
            <label class="label ml-auto">
              <a href="#" class="label-text-alt link link-hover">
                already have account?
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
