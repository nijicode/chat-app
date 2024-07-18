import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://avatar.iran.liara.run/public/girl"
            />
          </div>
        </div>
        <div className="chat-bubble bg-slate-500 text-black text-md leading-tight">
          It was said that you would, destroy the Sith, not join them.
        </div>
        <div className="chat-footer opacity-50">
          <time class="text-xs opacity-50">12:45</time>
        </div>
      </div>

      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://avatar.iran.liara.run/public/girl"
            />
          </div>
        </div>
        <div className="chat-bubble bg-[#1d232a] text-md leading-tight">
          OMG!!
        </div>
        <div className="chat-footer opacity-50">
          <time class="text-xs opacity-50">12:45</time>
        </div>
      </div>
    </>
  );
};

export default Message;
