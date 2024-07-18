import React from "react";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <label class="input overflow-hidden  input-bordered flex items-center gap-2 w-full relative">
        <input type="text" class="grow" placeholder="Message..." />
        <button
          type="submit"
          className="absolute btn btn-ghost text-lg inset-y-0 rounded-none duration-500 end-0 flex items-center pe-3"
        >
          <IoSend />
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
