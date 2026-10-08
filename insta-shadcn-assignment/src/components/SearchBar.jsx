import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center p-1 px-5  rounded-sm">
      <FaSearch className="relative left-13 text-xs text-gray-300" />
      <input
        className="text-center focus:outline-none text-sm  placeholder:text-gray-300"
        placeholder="Search.."
      />
    </div>
  );
};

export default SearchBar;
