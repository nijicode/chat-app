import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters");
    }
    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found!");
    }
  };
  return (
    <form className="flex items-center gap-2 p-2" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center relative overflow-hidden">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute rounded-none text-lg btn btn-ghost inset-y-0 end-0 duration-500"
        >
          <IoSearchSharp />
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
