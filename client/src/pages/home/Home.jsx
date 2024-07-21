import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="flex overflow-hidden h-full md:h-3/4 bg-gray-400 md:rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
      <div className="flex md:hidden">
        <div className={`${selectedConversation ? "hidden" : "flex"}`}>
          <Sidebar />
        </div>
        <div className={`${selectedConversation ? "flex" : "hidden"}`}>
          <MessageContainer />
        </div>
      </div>
      <div className="hidden md:flex">
        <div className={`flex`}>
          <Sidebar />
        </div>
        <div className={`flex`}>
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
