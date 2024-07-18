import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex overflow-hidden h-[400px] md:h-[600px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
