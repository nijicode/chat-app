import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 p-2">
      <label className="input input-bordered flex items-center relative overflow-hidden">
        <input type="text" className="grow" placeholder="Search" />
        <button
          type="submit"
          className="absolute rounded-none text-lg btn btn-ghost inset-y-0 end-0 duration-500"
        >
          <IoSearchSharp />
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
