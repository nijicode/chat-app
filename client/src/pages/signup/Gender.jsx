import React from "react";

const Gender = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label class="label gap-2 cursor-pointer">
          <span class="label-text">Male</span>
          <input name="gender" type="checkbox" class="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label class="label gap-2 cursor-pointer">
          <span class="label-text">Female</span>
          <input name="gender" type="checkbox" class="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Gender;
