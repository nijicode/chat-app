import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/authContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-screen md:w-[470px] lg:w-[700px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-400 items-center w-full text-black flex gap-2 p-2">
            <button
              className=" md:hidden text-3xl mr-1"
              type="button"
              onClick={() => setSelectedConversation(null)}
            >
              <IoMdArrowRoundBack />
            </button>
            <div className={`avatar ${isOnline ? "online" : "offline"}`}>
              <div className="w-12 rounded-full">
                <img src={selectedConversation.profilePic} />
              </div>
            </div>
            <span className="font-semibold capitalize">
              {selectedConversation.username}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center font-semibold flex flex-col items-center gap-2">
        <p className="text-2xl capitalize">Welcome ✋🏻 {authUser.username} </p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className="text-5xl" />
      </div>
    </div>
  );
};

export default MessageContainer;
