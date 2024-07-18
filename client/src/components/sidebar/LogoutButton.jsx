import React from "react";
import { TbLogout2 } from "react-icons/tb";

const LogoutButton = () => {
  return (
    <div className="text-2xl mt-auto pt-4 pb-1">
      <TbLogout2 className="cursor-pointer hover:scale-110 duration-500" />
    </div>
  );
};

export default LogoutButton;
