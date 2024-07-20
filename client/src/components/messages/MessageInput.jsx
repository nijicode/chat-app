import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <label className="input overflow-hidden  input-bordered flex items-center gap-2 w-full relative">
        <input
          type="text"
          className="grow"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute btn btn-ghost text-lg inset-y-0 rounded-none duration-500 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner "></span>
          ) : (
            <IoSend />
          )}
        </button>
      </label>
    </form>
  );
};

export default MessageInput;
