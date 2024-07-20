import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col snap-y overflow-auto">
      {conversations.map((conversation, idx) => (
        <div className="snap-start" key={conversation._id}>
          <Conversation
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        </div>
      ))}
    </div>
  );
};

export default Conversations;
