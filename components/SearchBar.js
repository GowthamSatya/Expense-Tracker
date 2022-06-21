import React from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../app/reducers/searchSlice";

const SearchBar = () => {
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <div className="neo-search-bar flex items-center justify-center p-2 rounded-full my-4">
      <FiSearch className="mx-2" size={22} />
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
        placeholder="Search your expenses here..."
        className="my-1 bg-transparent search-bar__input border-0 focus:border-0 outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
