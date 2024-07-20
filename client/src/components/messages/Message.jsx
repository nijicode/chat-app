import React from "react";
import { useAuthContext } from "../../context/authContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-slate-500 text-black " : "bg-[#1d232a] ";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "animate-shake" : "";
  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat profile pic" src={profilePic} />
          </div>
        </div>
        <div
          className={`font-semibold chat-bubble ${bubbleBgColor} ${shakeClass} pb-2 text-md leading-tight`}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50">
          <time className="text-xs">{formattedTime}</time>
        </div>
      </div>
    </>
  );
};

export default Message;
