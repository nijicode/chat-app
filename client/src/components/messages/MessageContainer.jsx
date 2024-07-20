import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/authContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="min-w-[500px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-400 w-full text-black flex gap-2 p-2">
            <span className="text-black">To:</span>
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
