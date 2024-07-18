import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer p-2 hover:bg-gray-700 duration-500 rounded-lg">
        <div class="avatar online">
          <div class="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold">John doe</p>
            <span className="text-xl">💀</span>
          </div>
        </div>
      </div>
      <div className="divider py-0 my-0 h-1"></div>
    </>
  );
};

export default Conversation;
