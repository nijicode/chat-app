import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="text-2xl mt-auto pt-4 pb-1">
      {!loading ? (
        <TbLogout2
          className="cursor-pointer hover:scale-110 duration-500"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
