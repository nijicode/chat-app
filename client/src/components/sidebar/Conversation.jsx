import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const handleClick = (conversation) => {
    if (selectedConversation === conversation) {
      setSelectedConversation(null);
    } else {
      setSelectedConversation(conversation);
    }
  };
  return (
    <>
      <div
        className={`flex gap-2 items-center cursor-pointer p-2 ${
          isSelected ? "bg-slate-500" : ""
        } hover:bg-gray-700 duration-500 rounded-lg`}
        onClick={() => handleClick(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold capitalize">{conversation.username}</p>
            <span className="text-xl">💀</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider py-0 my-0 h-1"></div>}
    </>
  );
};

export default Conversation;
